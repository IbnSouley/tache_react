import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostProvider } from './PostContext';
import PostList from './PostList';
import PostDetails from './PostDetails';

const App = () => {
    return (
        <PostProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                </Routes>
            </Router>
        </PostProvider>
    );
};

export default App;
