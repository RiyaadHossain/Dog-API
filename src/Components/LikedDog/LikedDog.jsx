import React from 'react';
import './LikedDog.css'

const LikedDog = ({likedItem}) => {
    return (
        <div>
            <div className='liked-dog'>
                        <img src={likedItem.image.url} alt="" />
                        <h4>{ likedItem.name}</h4>
                    </div>
        </div>
    );
};

export default LikedDog;