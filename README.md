# 🚀 GitHub Portfolio Explorer

A modern **React application** that allows users to search GitHub profiles and explore their repositories in a clean and interactive interface.

🌐 **Live Demo:**
https://github-portfolio-explorer6.onrender.com

---

## 📌 Features

* 🔍 Search GitHub users
* 👤 View GitHub user profile
* 📦 Browse repositories of any user
* ⭐ View repository stars and forks
* ⚡ Debounced search for better performance
* 🎨 Clean and responsive UI
* 🌐 GitHub API integration

---

## 🛠 Tech Stack

Frontend

* React
* React Router
* Axios
* CSS

API

* GitHub REST API

Deployment

* Render

---

## 📂 Project Structure

```
src
│
├── components
│   ├── RepoCard.jsx
│   ├── SearchBar.jsx
│   └── UserCard.jsx
│
├── hooks
│   └── GitHubHook.jsx
│
├── pages
│   ├── SearchPage.jsx
│   └── UserProfile.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```
git clone https://github.com/3f3e731/github-portfolio-explorer.git
```

Go into the project directory

```
cd github-portfolio-explorer
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

Open in browser

```
http://localhost:5173
```

---

## 🚀 Build for Production

```
npm run build
```

The production build will be generated in

```
dist/
```

---

## 🔗 API Used

This project uses the GitHub REST API

Example endpoints

```
https://api.github.com/search/users?q=username
https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos
```

---

## 💡 Future Improvements

* Pagination for repositories
* Dark mode
* Trending GitHub users
* Repository language filter
* UI animations

---

## 👨‍💻 Author

Mridul Dhakad

GitHub:
https://github.com/3f3e731

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.
