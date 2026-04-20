import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = ({categoryNameData}) => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const data = useLoaderData();
  const categoryNameId = use(categoryNameData);

  const [categoryNews, setCategoryNews] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (idInt === 0) {
      setCategoryNews(data);
      setCategoryName(categoryNameId[idInt].name);
    } 
    else if (idInt === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true,
      );
      setCategoryNews(filteredNews);
      setCategoryName(categoryNameId[idInt].name)
    }
    else {
      const filteredNews = data.filter((news) => news.category_id === idInt);

      setCategoryNews(filteredNews);
      setCategoryName(categoryNameId[idInt].name);
    }
  }, [data, categoryNameId, idInt]);

  return (
    <div>
      <h2 className="text-[#D72050] font-semibold">{categoryName}</h2>
      <div className="grid grid-cols-1 gap-5 mt-5 overflow-y-auto" style={{ maxHeight: '248vh' }}>
        {
            categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;
