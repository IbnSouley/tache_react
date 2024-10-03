import React from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from './PostContext';

const PostDetails = () => {
    const { id } = useParams();
    const { posts, loading, error } = usePosts();

    const post = posts.find(p => p.id === parseInt(id));

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found.</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><strong>Post ID:</strong> {post.id}</p>
        </div>
    );
};

export default PostDetails;
