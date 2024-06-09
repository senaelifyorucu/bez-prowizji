"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchPropertiesData } from '@/lib/properties';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHandshake, faMapMarkerAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { BounceLoader } from 'react-spinners';
import styles from './Adverts.module.css';

const Adverts = () => {
  const [latestProperties, setLatestProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProperties = async () => {
      const propertiesData = await fetchPropertiesData(1);
      setLatestProperties(propertiesData.reverse().slice(0, 3));
      setIsLoading(false);
    };

    fetchLatestProperties();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        {/* Latest Property Adverts Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Najnowsze oferty</h2>
          </div>
          {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <BounceLoader color="#17488d" />
          </div>
        ) : (
          <div className={styles.grid}>
            {latestProperties.map((property, index) => (
              <div key={index} className={`h-60 ${index===1 && 'my-2'}`}>
                <Link href={`/property/${property.id}`} passHref legacyBehavior>
                  <a className={styles.propertyCard}>
                    <div className={styles.propertyImageContainer}>
                      {property.property_images.image.slice(0, 1).map((img, i) => (
                        <Image
                          key={i}
                          src={`https://api.procode.pl/images/${img.url}`}
                          alt={`Property image ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className={styles.propertyImage}
                        />
                      ))}
                      <div className={styles.propertyDetails}>
                        <h3 className={styles.propertyDetailsTitle}>{property.property_type}</h3>
                        <p className="text-sm mb-1">Offer Type: {property.offer_type}</p>
                        <p className="text-sm mb-1">Price: {property.rent_price.exact_price} {property.rent_price.price_currency}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          )}
        </section>

        {/* Trend Section */}
        <section className={styles.trendsSection}>
          <div className={styles.sectionHeader}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Trendy</h2>
          </div>
          <div className={styles.trendGrid}>
            <a href="poradniki/5-trendow-biurowych-na-2024-rok" passHref className={styles.imageContainer1}>

                <Image
                  src='https://bez-prowizji.pl/wp-content/uploads/2023/12/modern-business-center_1127-3122.png'
                  alt="5 Trendów biurowych na 2024 rok"
                  layout="fill"
                  objectFit="cover"
                  className={styles.trendImage}
                />
                <div className={styles.imageOverlay}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '400' }}>5 Trendów biurowych na 2024 rok</h3>
                </div>

            </a>
            <a href="poradniki/rynek-warszawski-3q-2023" passHref className={styles.imageContainer2}>

                <Image
                  src='https://bez-prowizji.pl/wp-content/uploads/2023/08/warszawa02.png'
                  alt="Trend 2"
                  layout="fill"
                  objectFit="cover"
                  className={styles.trendImage}
                />
                <div className={styles.imageOverlay}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '400' }}>Rynek warszawski 3Q.2023</h3>
                </div>

            </a>
            <a href="poradniki/rynek-regionalny-3q-2023/" passHref className={styles.imageContainer2}>

                <Image
                  src='https://bez-prowizji.pl/wp-content/uploads/2023/12/small-office.jpg'
                  alt="Rynek regionalny 3Q.2023"
                  layout="fill"
                  objectFit="cover"
                  className={styles.trendImage}
                />
                <div className={styles.imageOverlay}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '400' }}>Rynek regionalny 3Q.2023</h3>
                </div>

            </a>
          </div>
        </section>

        {/* Static Text Section */}

        <section className={styles.textSection}>
          <div className={styles.sectionHeader}>
            <h2 style={{ fontSize: '1.5rem' , marginBottom: '1rem' }}>W czym możemy pomóc?</h2>
          </div>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap:'1.15rem'}}>
            <div className={styles.helpItem}>
              <div className={styles.helpIconContainer}>
                <div className={styles.helpIcon}>
                  <FontAwesomeIcon icon={faBuilding} style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
              <p className={styles.helpText}>Podnajem powierzchni (wyszukanie podnajemcy, przeprowadzenie procesu, wymagana re-aranżacja powierzchni biurowej)</p>
            </div>
            <div className={styles.helpItem}>
              <div className={styles.helpIconContainer}>
                <div className={styles.helpIcon}>
                  <FontAwesomeIcon icon={faHandshake} style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
              <p className={styles.helpText}>Proces renegocjacji obowiązującej umowy najmu – w przypadku kończącego się okresu najmu przeprowadzenie renegocjacji warunków jego przedłużenia</p>
            </div>
            <div className={styles.helpItem}>
              <div className={styles.helpIconContainer}>
                <div className={styles.helpIcon}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
              <p className={styles.helpText}>Proces relokacji do nowej siedziby – wielopoziomowy proces wyboru lokalizacji, aranżacji oraz przeprowadzenia prac wykończeniowych w przypadku decyzji o zmianie lokalizacji biura</p>
            </div>
            <div className={styles.helpItem}>
              <div className={styles.helpIconContainer}>
                <div className={styles.helpIcon}>
                  <FontAwesomeIcon icon={faSyncAlt} style={{ fontSize: '1.5rem' }} />
                </div>
              </div>
              <p className={styles.helpText}>Modernizacja powierzchni biurowej – dostosowanie do wymogów pracy hybrydowej</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Adverts;
