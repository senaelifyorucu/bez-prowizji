'use client'
import { fetchPropertiesData } from '@/lib/properties';
import Image from 'next/image';
import React, { useState } from 'react';

const properties = [
    { name: 'Domaniewska 48', imageUrl: '/images/domaniewska48.jpg' },
    { name: 'Cybernetyki 10', imageUrl: '/images/cybernetyki10.jpg' },
    { name: 'Waryńskiego 34', imageUrl: '/images/warynskiego3a.jpg' },
    { name: 'Prosta 32', imageUrl: '/images/prosta32.jpg' }
];

const WarszawaDawniejIDzis = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProperties = properties.filter(property =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div className = "container" >
        <
        h1 className = "title" > Warszawa Dawniej i Dziś < /h1> <
        div className = "searchContainer" >
        <
        input type = "text"
        placeholder = "Wpisz nazwę ulicy, aby wyszukać..."
        value = { searchTerm }
        onChange = { e => setSearchTerm(e.target.value) }
        className = "searchInput" /
        >
        <
        /div> <
        div className = "grid" > {
            filteredProperties.map((property, index) => ( <
                div key = { index }
                className = "card" >
                <
                Image src = { property.imageUrl }
                alt = { property.name }
                width = { 300 } // You may want to control this with CSS instead
                height = { 200 } // Same as above
                className = "image" /
                >
                <
                h2 className = "cardTitle" > { property.name } < /h2> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default WarszawaDawniejIDzis;