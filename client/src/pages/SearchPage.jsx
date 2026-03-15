import React, { useState, useEffect } from "react";
import gitHubHook from "../hooks/gitHubHook";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";


const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);

    const { serachUsers, loading } = gitHubHook();

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query) {
                const data = await serachUsers(query);
                setUsers(data.items);
            } else {
                setUsers([]);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className="container">
            <h1 className="title">🚀 GitHub Explorer</h1>

            <SearchBar query={query} setQuery={setQuery} />

            {loading && <p className="loading">Searching...</p>}

            <div className="user-grid">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>

            {!loading && users.length === 0 && query && (
                <p className="no-result">No users found</p>
            )}
        </div>
    );
};

export default SearchPage;