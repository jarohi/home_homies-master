import React from 'react';
import './OriginalPost.css'; // Import the CSS file for styling

interface PostURL {
    url: string,
}

const OriginalPost: React.FC<PostURL> = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="facebook-button">
      Visit Original Post
    </a>
  );
};

export default OriginalPost;