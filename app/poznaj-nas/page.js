// pages/poznaj-nas.js
import React from 'react';
import styles from './PoznajNas.module.css';
import Image from 'next/image';

const PoznajNas = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Dlaczego Bez Prowizji?</h2>
        <p className={styles.subtitle}>
          Na naszym portalu oferujemy Ci unikalne podejście oraz zapewniamy bezpłatne usługi niezbędne do wynajmu powierzchni biurowych.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/icon1.svg" alt="Icon 1" width={64} height={64} />
            </div>
            <h3 className={styles.cardTitle}>Brak Dodatkowych Kosztów</h3>
            <p className={styles.cardDescription}>
              To oznacza, że nie będziesz musiał płacić dodatkowych pieniędzy przy wynajmowaniu powierzchni biurowych. Wszystkie usługi niezbędne do przeprowadzenia procesu wyboru właściwego biura dla Twojej firmy oraz przedstawione oferty to oferty budynków biurowych bez prowizji.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/icon2.svg" alt="Icon 2" width={64} height={64} />
            </div>
            <h3 className={styles.cardTitle}>Pełna Transparentność</h3>
            <p className={styles.cardDescription}>
              Pełna Transparentność: Prezentujemy oferty wynajmu biur z dokładnymi informacjami na temat każdego budynku. Możesz być pewien/a, że cena, którą widzisz, to cena początkowa do negocjacji.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image src="/icons/icon3.svg" alt="Icon 3" width={64} height={64} />
            </div>
            <h3 className={styles.cardTitle}>Oszczędność Czasu</h3>
            <p className={styles.cardDescription}>
              Dzięki naszemu podejściu "Bez Prowizji" oszczędzasz nie tylko pieniądze, lecz przede wszystkim czas. Nie musisz przeszukiwać dziesiątek ofert my zrobimy to za Ciebie.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Poznaj nas</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Jasność i Przejrzystość: nasz dział baz danych pozostaje w stałym kontakcie z właścicielami prezentowanych ofert.
            </p>
            <p className={styles.paragraph}>
              Rozwiązania dla Ciebie: Nasz portal został stworzony z myślą o Tobie, naszym użytkowniku. Dążymy do tego, aby proces wynajmu był prosty i bezpieczny.
            </p>
            <p className={styles.paragraph}>
              Warto wybrać „Bez Prowizji” jako swoje źródło do poszukiwań powierzchni biurowych, ponieważ gwarantujemy Ci pełne wsparcie w procesie poszukiwania i wyborze powierzchni biurowej oszczędność Twojego czasu, a przede wszystkim analizę całego rynku biurowego pod kątem Twoich indywidualnych potrzeb.
            </p>
            <a className={styles.button} href="#">Znajdź Biuro W 3 Krokach</a>
          </div>
          <div className={styles.image}>
            <Image src="/images/team.jpg" alt="Team" width={600} height={400} className={styles.image}/>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Baza wiedzy</h2>
        <p className={styles.subtitle}>
          Wiedza na temat nieruchomości biurowych jest kluczowa dla podejmowania świadomych decyzji przy wynajmie powierzchni biurowej.
        </p>
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <input type="checkbox" id="item1" className={styles.accordionCheckbox}/>
            <label htmlFor="item1" className={styles.accordionLabel}>#1. BUDŻET</label>
            <div className={styles.accordionContent}>
              <p className={styles.accordionText}>
                Opis dotyczący budżetu.
              </p>
            </div>
          </div>
          <div className={styles.accordionItem}>
            <input type="checkbox" id="item2" className={styles.accordionCheckbox}/>
            <label htmlFor="item2" className={styles.accordionLabel}>#2. ANALIZA KONKURENCJI</label>
            <div className={styles.accordionContent}>
              <p className={styles.accordionText}>
                Opis dotyczący analizy konkurencji.
              </p>
            </div>
          </div>
          {/* Add more accordion items as needed */}
        </div>
      </section>
    </div>
  );
};

export default PoznajNas;
