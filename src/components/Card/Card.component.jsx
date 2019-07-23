import React from 'react';
import './Card.component.css';

const Card = ({name, email,id}) => {
    return (
        <div className={'card-container'}>
            <img src={`https://robohash.org/${id}?set=set2`} height='200' width='200' alt='' />
            <h3>{name}</h3>
            <h5>{email}</h5>
        </div>
    );
};

export default Card;