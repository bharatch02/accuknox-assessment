import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center">
            <input 
                type="text" 
                placeholder="Search anything..." 
                value={searchQuery}
                onChange={handleSearch}
                className="border border-blue-200 rounded-lg w-96 bg-blue-50 focus:outline-none px-2 relative"
            />
            <button 
                type="submit" 
                className="  hover:scale-125 duration-300 text-white font-bold p-0.5 rounded-lg "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </button>
        </form>
    );
}

export default SearchBar;
