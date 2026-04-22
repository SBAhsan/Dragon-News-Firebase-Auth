import React, { use } from 'react';
import TrendingNewsCard from './TrendingNewsCard';
import logo from '../../assets/logo.png'

const TrendingNews = ({newsList}) => {

    const allNews = use(newsList);
    
    const trendingNews = allNews.filter(news => news.others.is_trending == true).slice(0, 4);

    return (
        <div className='mt-5'>
            <ul>
                {trendingNews.map(news => (
                <TrendingNewsCard key={news.id} news={news} />
            ))}
            </ul>
        </div>
    );
};

export default TrendingNews;