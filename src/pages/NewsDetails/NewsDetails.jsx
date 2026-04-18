import React, { use, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import RightAside from '../../components/HomeAsideLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === id);
        setNews(newsDetails);
    }, [data, id])

    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
            </header>

            <main className='grid grid-cols-1 lg:grid-cols-12 gap-10 my-20'>
                <section className='col-span-9'>
                    <h2 className="font-semibold text-[#403F3F]">Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;