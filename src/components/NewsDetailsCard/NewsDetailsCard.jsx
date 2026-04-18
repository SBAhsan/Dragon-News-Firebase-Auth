import React from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import arrowImg from "../../assets/Vector.png";

const NewsDetailsCard = ({ news }) => {

  if (!news) return null;

  const { category_id, title, image_url, details, tags, author } = news;

  if (!author) return null;

  return (
    <div className="mt-5 border border-1 border-[#F3F3F3] p-6 rounded-lg">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full object-cover rounded-lg mb-4"
        onError={(e) =>
          (e.target.src = "https://placehold.co/600x400?text=No+Image")
        }
      />

      {/* Title */}
      <h2 className="font-bold text-xl mb-3">{title}</h2>

      {/* Date + Tags + Details all in one paragraph */}
      <p className="text-sm text-[#706F6F] mb-6">
        {format(new Date(author.published_date), "EEEE, MMMM dd, yyyy")} | Tag
        Cloud Tags:{" "}
        {tags.map((tag, i) => (
          <span key={i} className="capitalize">
            {tag}
            {i < tags.length - 1 ? ", " : ""}
          </span>
        ))}{" "}
        — {details}
      </p>

      {/* Divider */}
      <div className="divider"></div>

      {/* Back Button */}

      <Link to={`/category/${category_id}`}>
        <button className="btn btn-error text-white bg-[#D72050]">
          <img src={arrowImg} alt="" /> All news in this category
        </button>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
