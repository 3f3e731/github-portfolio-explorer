import React, { useState } from 'react'
import GitHubApi from '../api/GitHubApi';


const gitHubHook = () => {
    const [loading, SetLoading] = useState(false);
    const [error, SetError] = useState(null);

    const serachUsers = async (query) => {
        try {
            SetLoading(true);

            const res = await GitHubApi.get(
                `/search/users?q=${query}`
            )
            return res.data;
        }
        catch (err) {
            SetError(err);
        }
        finally {
            SetLoading(false);
        }
    }

    const getUserProfile = async (username) => {
        try {
            SetLoading(true);

            const res = await GitHubApi.get(`/users/${username}`);

            return res.data;

        } catch (err) {
            SetError(err);

        } finally {
            SetLoading(false);
        }
    };

    const getUserRepos = async (username, page = 1) => {
        try {
            const res = await GitHubApi.get(
                `/users/${username}/repos?page=${page}&per_page=10`
            );

            return res.data;
        }
        catch (err) {
            SetError(err);
        }
        finally {
            SetLoading(false);
        }

    };
    return {
        serachUsers,
        getUserProfile,
        getUserRepos,
        loading,
        error
    };
};

export default gitHubHook
