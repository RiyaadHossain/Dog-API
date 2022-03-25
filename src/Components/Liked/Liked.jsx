import React from 'react';
import './Liked.css'

const Liked = ({ like }) => {
    return (
        <div className='liked-container'>
            <h2>Summary</h2>
            <div className="liked-body">
                <p><strong>Likes: </strong>{like.length}</p>
                <p><strong>You Liked: </strong>{like.map(lik => <li key={lik.id}>➡️{lik.name}</li>)}</p>
            </div>
        </div>
    );
};

export default Liked;