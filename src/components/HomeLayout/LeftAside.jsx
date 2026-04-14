import React, { Suspense } from 'react';
import CategoryNews from '../../pages/CategoryNews/CategoryNews';
import Categories from '../Categories/Categories';

const categories = fetch('/categories.json').then(res => res.json(0));

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={'Loading...'}>
                <Categories categories={categories}></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;