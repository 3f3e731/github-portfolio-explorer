import React from "react";

const RepoCard = ({ repo }) => {
    return (
        <div className="repo-card">

            <h3>{repo.name}</h3>

            <p>{repo.description}</p>

            <div className="repo-stats">
                ⭐ {repo.stargazers_count}
                <span>🍴 {repo.forks_count}</span>
            </div>

            <a href={repo.html_url} target="_blank">
                View Repo
            </a>

        </div>
    );
};

export default RepoCard;