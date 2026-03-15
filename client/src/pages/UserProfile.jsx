import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gitHubHook from "../hooks/gitHubHook";
import RepoCard from "../components/RepoCard";

const UserProfile = () => {
    const { username } = useParams();
    const { getUserProfile, getUserRepos } = gitHubHook();

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const profile = await getUserProfile(username);
            const repositories = await getUserRepos(username);

            setUser(profile);
            setRepos(repositories);
        }

        fetchData();
    }, [username]);

    if (!user) return <p className="loading">Loading...</p>;

    return (
        <div className="profile-container">

            {/* LEFT PROFILE CARD */}
            <div className="profile-card">
                <img src={user.avatar_url} alt="avatar" />

                <h2>{user.name || user.login}</h2>

                <p className="bio">{user.bio}</p>

                <div className="stats">
                    <p><strong>{user.followers}</strong> Followers</p>
                    <p><strong>{user.following}</strong> Following</p>
                    <p><strong>{user.public_repos}</strong> Repos</p>
                </div>

                <div className="info">
                    <p>📍 {user.location}</p>
                    <p>🏢 {user.company}</p>
                    <p>🔗 {user.blog}</p>
                </div>
            </div>

            {/* RIGHT REPO LIST */}
            <div className="repo-section">
                <h2>Repositories</h2>

                <div className="repo-grid">
                    {repos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default UserProfile;