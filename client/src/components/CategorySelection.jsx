import React from "react";

const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

function CategorySelection({
  onSelectCategory,
  selectedCategory,
  activeCategory,
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center space-x-16 border-b-2 px-4 py-5 font-semibold text-gray-900">
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`${activeCategory === category ? "active-button" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategorySelection;
