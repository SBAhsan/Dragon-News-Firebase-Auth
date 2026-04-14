import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (idInt === 0) {
      setCategoryNews(data);
    } else if (idInt === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true,
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id === idInt);
      console.log(filteredNews);

      setCategoryNews(filteredNews);
    }
  }, [data, idInt]);

  return (
    <div>
      <h2 className="text-[#403F3F] font-semibold">Total <span className="text-[#D72050]">{categoryNews.length}</span> news found</h2>
      <div className="grid grid-cols-1 gap-5 mt-5">
        {
            categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
