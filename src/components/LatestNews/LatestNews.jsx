import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = ({ allNews }) => {
  const breakingNews = allNews.filter(news => news.others.is_today_pick === true);

  return (
    <div className="flex items-center gap-5 bg-[#F3F3F3] mt-8 p-3">
      <h2 className="bg-[#D72050] py-2 px-5 text-white text-xl">Latest</h2>
      <Marquee>
        {breakingNews.map(news => (
          <p key={news.id} className="mr-5">{news.title}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;