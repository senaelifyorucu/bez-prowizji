'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const articles = [{
        title: '5 Trendów biurowych na 2024 rok',
        imageUrl: '/images/office-trends.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    },
    {
        title: 'Rynek warszawski 3Q, 2023',
        imageUrl: '/images/warsaw-market.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    },
    {
        title: 'Rynek regionalny 3Q, 2023',
        imageUrl: '/images/regional-market.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    },
    {
        title: 'Zrównoważone budynki biurowe',
        imageUrl: '/images/sustainable-buildings.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    },
    {
        title: 'Poradniki biurowe',
        imageUrl: '/images/office-tips.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    },
    {
        title: 'Przeprowadzka biurowa',
        imageUrl: '/images/office-relocation.jpg',
        date: 'Opublikowano: 12 grudnia, 2023'
    }
];

const Trendy = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div className = "container" >
        <
        h1 className = "title" > TRENDY < /h1> <
        div className = "searchContainer" >
        <
        input type = "text"
        placeholder = "Wpisz nazwę artykułu, aby wyszukać..."
        value = { searchTerm }
        onChange = { e => setSearchTerm(e.target.value) }
        className = "searchInput" /
        >
        <
        /div> <
        div className = "filterContainer" >
        <
        span > Filtruj wg kategorii: < /span> <
        label > < input type = "checkbox" / > Poradniki < /label> <
        label > < input type = "checkbox" / > Raporty < /label> <
        label > < input type = "checkbox" / > Rynek biurowy < /label> <
        label > < input type = "checkbox" / > Trendy < /label> <
        select >
        <
        option > Sortuj < /option> <
        /select> <
        /div> <
        div className = "grid" > {
            filteredArticles.map((article, index) => ( <
                div key = { index }
                className = "card" >
                <
                Image src = { article.imageUrl }
                alt = { article.title }
                width = { 300 }
                height = { 200 }
                className = "image" /
                >
                <
                h2 > { article.title } < /h2> <
                p > { article.date } < /p> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Trendy;