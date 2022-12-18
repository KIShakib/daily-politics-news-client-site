import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://daily-politics-news-server.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h5>All Categories...</h5>
            {
                categories.map((category, idx) =>
                    <li key={idx}>
                        <NavLink to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</NavLink>
                    </li>)
            }
        </div>
    );
};

export default LeftSideNav;