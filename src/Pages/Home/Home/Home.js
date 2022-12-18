import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h4>Here's all the news from today....</h4>
            <div>
                {
                    allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;