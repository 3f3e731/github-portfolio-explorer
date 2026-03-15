import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
    const navigate = useNavigate();

    return (
        <div
            className="card"
            onClick={() => navigate(`/user/${user.login}`)}
        >
            <img src={user.avatar_url} alt={user.login} />

            <h3>{user.login}</h3>

            <button>View Profile</button>
        </div>
    );
};

export default UserCard;