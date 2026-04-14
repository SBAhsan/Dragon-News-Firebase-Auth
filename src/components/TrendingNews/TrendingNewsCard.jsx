import { format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

const TrendingNewsCard = ({ news }) => {
    const { title, image_url, author, category_id } = news;

    return (
        <div className="mb-5">
            <img
                src={image_url}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-2"
                onError={(e) => e.target.src = 'https://placehold.co/600x400?text=No+Image'}
            />
            <h2 className="font-bold text-lg mb-4">{title}</h2>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span>Category {category_id}</span>
                <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {format(new Date(author.published_date), "MMM d, yyyy")}
                </span>
            </div>
            <div className="divider my-2"></div>
        </div>
    );
};

export default TrendingNewsCard;