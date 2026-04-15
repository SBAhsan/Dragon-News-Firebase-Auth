import React, { Suspense } from 'react';
import CategoryNews from '../../pages/CategoryNews/CategoryNews';
import Categories from '../Categories/Categories';
import TrendingNews from '../TrendingNews/TrendingNews';

const categories = fetch('/categories.json').then(res => res.json(0));
const newsList = fetch('/news.json').then(res => res.json())

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={'Loading...'}>
                <Categories categories={categories}></Categories>
            </Suspense>
            <Suspense>
                <TrendingNews newsList={newsList}></TrendingNews>
            </Suspense>
        </div>
    );
};

export default LeftAside;