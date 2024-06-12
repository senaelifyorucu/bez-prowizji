'use client';
import { fetchPropertiesData } from '@/lib/properties';
import Image from 'next/image';
import React, { useState } from 'react';

const properties = [
    { name: 'Domaniewska 48', imageUrl: '/images/domaniewska48.jpg' },
    { name: 'Cybernetyki 10', imageUrl: '/images/cybernetyki10.jpg' },
    { name: 'Waryńskiego 34', imageUrl: '/images/warynskiego3a.jpg' },
    { name: 'Prosta 32', imageUrl: '/images/prosta32.jpg' },
    { name: 'Prosta 68', imageUrl: '/images/prosta68.jpg' },
    { name: 'al. Księcia Józefa Poniatowskiego 1', imageUrl: '/images/poniatowskiego1.jpg' },
    { name: 'Emilii Plater 49', imageUrl: '/images/emiliiplater49.jpg' },
    { name: 'Wioślarska 6 i 8', imageUrl: '/images/wioslarska6.jpg' },
    { name: 'Wołoska 12', imageUrl: '/images/woloska12.jpg' },
    { name: 'Plac Bankowy 2', imageUrl: '/images/plac-bankowy2.jpg' },
    { name: 'Żelazna 32', imageUrl: '/images/zelazna32.jpg' },
    { name: 'Bracka 25', imageUrl: '/images/bracka25.jpg' },
    { name: 'Plac Europejski 1, 2 i 6', imageUrl: '/images/placeuropejski.jpg' },
    { name: 'Krucza 50', imageUrl: '/images/krucza50.jpg' },
    { name: 'Przeskok 2', imageUrl: '/images/przeskok2.jpg' },
    { name: 'Jana Pawła II 22', imageUrl: '/images/janapawlaii.jpg' },
    { name: 'Postępu 14', imageUrl: '/images/postepu14.jpg' },
    { name: 'Puławska 2', imageUrl: '/images/pulawska2.jpg' },
    { name: 'Jagiellońska 26', imageUrl: '/images/jagiellonska26.jpg' },
    { name: 'Marszałkowska 126/134', imageUrl: '/images/marszalkowska126.jpg' },
    { name: 'Złota 59', imageUrl: '/images/zlota59.jpg' }
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
                width = { 300 }
                height = { 200 }
                className = "image" /
                >
                <
                p > { property.name } < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default WarszawaDawniejIDzis;