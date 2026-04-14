import React, { use } from "react";
import { Link, NavLink } from "react-router";

const Categories = ({ categories }) => {
  const allCategories = use(categories);

  return (
    <div>
      <h2 className="font-semibold text-[#403F3F]">
        All Categories
      </h2>
      <div className="grid grid-cols-1 gap-1 mt-5">
        {allCategories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="bg-white hover:bg-[#E7E7E7] text-[#706F6F] hover:text-[#403F3F] pl-20 py-2"
            >
              {category.name}
            </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;

// btn border-none font-medium text-[15px]