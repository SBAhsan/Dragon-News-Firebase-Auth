import { format } from "date-fns";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, image_url, details, tags, rating, total_view } = news;

  return (
    <div className="border border-[#706F6F] hover:border-blue-400 rounded-xl p-4">
      {/* Author Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-3">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full rounded-lg mb-3 object-cover h-48"
        onError={(e) =>
          (e.target.src = "https://placehold.co/600x400?text=No+Image")
        }
      />

      {/* Tags + Details */}
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Tags: </span>
        {tags.map((tag, i) => (
          <span key={i} className="text-blue-500 capitalize">
            {tag}
            {i < tags.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <p className="text-sm text-gray-600 mb-1">
        {details.slice(0, 150)}...{" "}
        <Link to={`/news-details/${id}`} className="text-red-500 font-medium cursor-pointer">
          Read More
        </Link>
      </p>

      {/* Divider */}
      <div className="divider my-2"></div>

      {/* Rating + Views */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-sm ml-1">{rating.number}.0</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
