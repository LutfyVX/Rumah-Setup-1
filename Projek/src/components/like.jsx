import { useState } from 'react';
import { Icon } from '@iconify/react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
      <Icon 
         icon={liked ? "mdi:heart" : "weui:like-outlined"} 
        width="32" 
        height="32" 
        color={liked ? 'red' : 'gray'} 
      />
    </button>
  );
};

export default LikeButton;
