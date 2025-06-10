import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full md:w-1/2">
        {/* Icon Search */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;
