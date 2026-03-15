import React from "react";


const SearchBar = ({ query, setQuery }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="🔍 Search GitHub users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;