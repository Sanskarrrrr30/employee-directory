import React from "react";

/** SearchBar component to search for employees by name or department */

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
    <input
        type="text"
        placeholder="Search by name (or) department"
        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />
    );
};

export default SearchBar;
