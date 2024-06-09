"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the LeafletMap component with no SSR
const LeafletMap = dynamic(() => import('@/components/leafletmap/LeafletMap'), { ssr: false });

const Kontakt = () => {
  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image 
            src="https://bez-prowizji.pl/wp-content/uploads/2023/09/prosta-offices.jpg" // Make sure this path is correct
            alt="Office"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="rounded-lg overflow-hidden w-full h-full">
            <LeafletMap />
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Lokalizacja</h2>
          <p className="text-lg mt-2">ul. Prosta 51, 00-838 Warszawa</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Telefon</h2>
          <p className="text-lg mt-2">+48 22 586 97 90</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">E-mail</h2>
          <p className="text-lg mt-2">info@cream-advisors.pl</p>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
