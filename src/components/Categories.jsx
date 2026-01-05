import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const categorypromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const categoryName = use(categorypromise);
    return (
        <div>
            <ul>
                {categoryName.map((category) => (
                    <li className='w-full ps-12 py-4 font-medium text-accent text-xl rounded-md' key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;