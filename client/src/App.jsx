import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import SearchPage from './pages/SearchPage';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path='/user/:username' element={<UserProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
