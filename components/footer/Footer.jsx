import React from "react";
import Image from 'next/image';
import Logo from "../logo/Logo";
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white pt-24 " style={{backgroundColor: '#262626'}}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-16">
          {/* Left section with logo and description */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-left">
            <div className="flex items-center mb-4">
              {/*<Logo color="#009dff" />*/}

            </div>
            <p className=" text-center">
              Oferujemy pełny zakres usług związanych z nieruchomościami komercyjnymi. Firma specjalizuje się w asset i property managementcie, leasingu powierzchni handlowych i biurowych, sprzedaży nieruchomości oraz obsłudze prawnej rynku nieruchomości.
            </p>
          </div>

          {/* Middle section with information */}
          <div className="flex flex-col items-center lg:items-center text-center lg:text-left">
            <h1 className="text-2xl mb-4 ">Informacje</h1>
            <ul className="space-y-2 text-center mt-4">
              <li><a href="#" className="text-white hover:text-gray-400">Poznaj Nas</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Regulamin</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Polityka prywatności</a></li>
            </ul>
          </div>

          {/* Right section with quick contact */}
          <div className="flex flex-col items-center text-center">
            <h5 className="text-2xl mb-4">Szybki kontakt</h5>
            <ul className="space-y-2">
              <li><a href="mailto:biuro@cream-advisors.pl" className="text-white hover:text-gray-400">biuro@cream-advisors.pl</a></li>
              <li><a href="tel:+48225869790" className="text-white hover:text-gray-400">+48 22 586 97 90</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">ul. Prosta 51, 00-838 Warszawa</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">NIP: 958-14-54-203</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 py-6 flex flex-col lg:flex-row justify-center lg:justify-between text-center text-sm text-gray-500">
          <span className="w-full lg:w-1/2">&copy; 2024 | Bez-Prowizji.pl Sp. z o.o.</span>
          <span className="w-full lg:w-1/2">Wszelkie prawa zastrzeżone.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
