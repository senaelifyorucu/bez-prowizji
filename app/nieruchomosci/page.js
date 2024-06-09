'use client'

import React, { useState, useEffect, useRef } from 'react';
import { fetchPropertiesData } from '@/lib/properties';
import Image from 'next/image';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(10); // Set the initial total pages

  const observer = useRef();

  // Manually define the list of all possible districts
  const allDistricts = [
    'Białołęka',
    'Centrum',
    'Mokotów',
    'Ochota',
    'Praga Północ',
    'Praga Południe',
    'Ursynów',
    'Wilanów',
    'Włochy',
    'Wola',
    'Żoliborz'
    // Add all other districts here
  ];

  // Fetch initial properties data when the component mounts
  useEffect(() => {
    const fetchInitialData = async () => {
      const propertiesData = await fetchPropertiesData(page);
      setProperties(propertiesData.reverse());
      setFilteredProperties(propertiesData.reverse());
      // Assuming you have a way to get the total pages from the API
      // setTotalPages(actualTotalPagesFromAPI);
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    if (selectedDistrict) {
      setFilteredProperties(properties.filter(property => property.address.area === selectedDistrict).reverse());
    } else {
      setFilteredProperties(properties.reverse());
    }
  }, [selectedDistrict, properties]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver(handleIntersection, options);

    if (observer.current && loading) {
      observer.current.observe(document.querySelector('#loadMore'));
    }

    return () => observer.current && observer.current.disconnect();
  }, [loading]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && page < totalPages) {
        loadMore();
      }
    });
  };

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const newProperties = await fetchPropertiesData(nextPage);
    setProperties([...properties, ...newProperties]);
    setPage(nextPage);
    setLoading(false);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Real Estate Listings</h1>
      <div className="mb-4">
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value=''>All Districts</option>
          {allDistricts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties && filteredProperties.map((property, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{property.property_type}</h2>
            <p className="mb-2">Offer Type: {property.offer_type}</p>
            <p className="mb-2">Parking Spaces: {property.parking_space}</p>
            <p className="mb-2">Common Space: {property.common_space}</p>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="mb-2">{property.address.street} {property.address.street_number}, {property.address.area} {property.address.city}</p>
            <p className="mb-2">Price: {property.rent_price.exact_price} {property.rent_price.price_currency}</p>
            <h3 className="text-lg font-semibold mb-2">Images</h3>
            <div className="flex flex-wrap">
              {property.property_images.image.map((img, i) => (
                <Image 
                  key={i} 
                  src={`https://api.procode.pl/images/${img.url}`} 
                  alt={`Property image ${i}`} 
                  width={img.width}  // Adjust width as necessary
                  height={img.height} // Adjust height as necessary
                  className="rounded mb-2"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;

