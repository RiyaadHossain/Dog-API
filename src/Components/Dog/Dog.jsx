import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './Dog.css'

const Dog = ({ dog }) => {
    const {name, bred_for,  image : {url}, temperament, life_span } = dog
    // console.log(dog);
    return (
        <div className='card'>
            <img src={url} alt="" />
            <div className="card-body">
                <h2>{name}</h2>
                <p className='lead'><strong>Category:</strong> {bred_for}</p>
                <p className='lead'><strong>characteristics:</strong> {temperament}</p>
                <div>
                    <p>Life-Span: {life_span}</p>
                    <AiFillHeart className='btn'/>
                </div>
            </div>
        </div>
    );
};

export default Dog;