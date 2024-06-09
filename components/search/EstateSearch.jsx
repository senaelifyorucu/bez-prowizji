"use client";

import { useState } from 'react';
import backgroundImage from '@/public/images/warszawa02.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './EstateSearch.module.css';

export default function EstateSearch() {
  const [district, setDistrict] = useState('');
  const [numEmployeesFrom, setNumEmployeesFrom] = useState('');
  const [numEmployeesTo, setNumEmployeesTo] = useState('');
  const [postalCodes, setPostalCodes] = useState(['', '', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to real estate company
  };

  const handlePostalCodeChange = (index, value) => {
    const cleanedValue = value.replace(/[^0-9]/g, '').slice(0, 5); // Remove non-digits and limit to 5 characters
    setPostalCodes([
      ...postalCodes.slice(0, index),
      cleanedValue,
      ...postalCodes.slice(index + 1),
    ]);
  };

  const districts = [
    "Wszystkie dzielnice",
    "Białołęka",
    "Centrum",
    "Mokotów",
    "Ochota",
    "Praga Północ",
    "Praga Południe",
    "Ursynów",
    "Wilanów",
    "Włochy",
    "Wola",
    "Żoliborz"
  ];

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Znajdź Swoje Miejsce Pracy</h2>
      <div className={styles.innerContainer}>
        <div className={styles.rowTop}>
          <div className={styles.step}>
            <h3 className={styles.stepTitle}>KROK 1: Dzielnica</h3>
            <select
              className={styles.selectInput}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="">Wybierz dzielnicę</option>
              {districts.map((districtName) => (
                <option key={districtName} value={districtName}>
                  {districtName}
                </option>
              ))}
            </select>
          </div>

          <div className={`${styles.step} ${district ? '' : styles.disabled}`}>
            <h3 className={styles.stepTitle}>KROK 2: Liczba pracowników</h3>
            <div className={styles.employeesInput}>
            <input
              className={styles.numericInput}
              type="text"
              value={numEmployeesFrom}
              onChange={(e) => setNumEmployeesFrom(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="Od"
              disabled={!district}
            />
            <input
              className={styles.numericInput}
              type="text"
              value={numEmployeesTo}
              onChange={(e) => setNumEmployeesTo(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="Do"
              disabled={!district}
            />
            </div>
          </div>

          <div className={`${styles.step} ${numEmployeesTo && numEmployeesTo > 0 ? '' : styles.disabled}`}>
            <h3 className={styles.stepTitle}>KROK 3: Przykładowe kody pocztowe pracowników</h3>
            <div className={styles.postalCodesContainer}>
              {postalCodes.map((code, index) => (
                <input
                  key={index}
                  className={styles.textInput}
                  type="text"
                  value={code}
                  onChange={(e) => handlePostalCodeChange(index, e.target.value)}
                  placeholder={`Kod #${index + 1}`}
                  disabled={!numEmployeesTo || numEmployeesTo == 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.searchButton}
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          </button>
        </div>
    </div>
  );
}
