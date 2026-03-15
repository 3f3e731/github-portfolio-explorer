import React from 'react';
import axios from 'axios';
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const GitHubApi = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Authorization: `token ${TOKEN}`
    }
})

export default GitHubApi;