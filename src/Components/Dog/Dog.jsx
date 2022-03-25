import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './Dog.css'

const Dog = ({ dog, youLiked }) => {
    const {name, bred_for,  image : {url}, temperament, life_span } = dog
    return (
        <div className='card'>
            <img src={url} alt="" />
            <div className="card-body">
                <div>
                <h2>{name}</h2>
                <p className='lead'><strong>Utility:</strong> {bred_for}</p>
                <p className='lead'><strong>characteristics:</strong> {temperament}</p>
               </div>
                <div className='cart-footer'>
                    <p>Life-Span:🐕 {life_span}</p>
                    <AiFillHeart onClick={() => youLiked(dog)} className='btn'/>
                </div>
            </div>
        </div>
    );
};

export default Dog;