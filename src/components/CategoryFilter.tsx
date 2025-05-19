import React from 'react';
import { FilterCategory } from '../types';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: FilterCategory;
  onChange: (category: FilterCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === null
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;