import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faSearch, faMoneyBill, faChartLine, faSearchLocation, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Add appropriate icons
import NieruchomosciCarousel from '../nieruchomosci-carousel/NieruchomosciCarousel';
import styles from './Info.module.css';

const InfoGrid = () => {
  return (

    <div style={{
        backgroundImage: 'linear-gradient(#b5b19f77, #2f3f45d2), url(https://bez-prowizji.pl/wp-content/uploads/2023/09/warszawa-1.png)',
        position: 'relative',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
        height: '100vh'
      }}>
      <div className="max-w-screen-3xl mx-auto px-8">
        <h3 className="text-white text-2xl text-center mb-1">Warszawski Rynek Biurowy</h3>
        <h2 className="text-white text-5xl  text-center mb-8">Trendy w 2023 roku</h2>
        <div className="grid grid-cols-6 gap-4">
          {/* Icons and Text */}
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faBuilding} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">6,2 mln mkw Istniejąca powierzchnia biurowa</p>
          </div>
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faBriefcase} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">20 300 mkw Nowe powierzchnie biurowe w 3Q 2023</p>
          </div>
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faBuilding} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">262 200 mkw Biurowce w trakcie budowy (3Q 2023)</p>
          </div>
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faSearchLocation} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">10,6% Średni wskaźnik pustostanów</p>
          </div>
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faMoneyBill} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">22,5-26 EUR/mkw Średnia miesięczna wartość czynszu w ścisłym centrum</p>
          </div>
          <div className={styles.sm_data}>
            <FontAwesomeIcon icon={faMoneyBill} className={`text-4xl mb-2 ${styles.icon}`} />
            <p className="text-center">13-17 EUR/mkw Średnia miesięczna wartość czynszu poza centrum</p>
          </div>

          {/* Data Components */}
          <div className={styles.lg_data}>

            <h3 className="text-xl mb-4">Wskaźnik pustostanów</h3>
            <p className="text-3xl font-semibold">10.6%</p>
            <p className="text-lg">Warszawa (średnio)</p>
            <p className="text-lg">9.1% Centrum miasta</p>
            <p className="text-lg">11.8% Poza centrum</p>
          </div>
          <div className={styles.lg_data}>
            <h3 className="text-3xl  mb-4">Powierzchnia w trakcie budowy według stref [%]</h3>
            {/* Add your chart or data visualization here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
