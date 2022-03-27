import React from 'react';
import LikedDog from '../LikedDog/LikedDog';
import { AiTwotoneHeart } from 'react-icons/ai';
import './Liked.css'

const Liked = ({ like }) => {
    return (
        <div className='liked-container'>
            <h2 style={{textAlign:'center'}}>Summary</h2>
            <div className="liked-body">
                <p className='heart'><strong>Likes: </strong>{like.length}<AiTwotoneHeart/> </p>
                <strong>You Liked: </strong>
                {
                    like.map(likedItem => <LikedDog key={like.id} likedItem={likedItem}/>)
                }
            </div>
        </div>
    );
};

export default Liked;
