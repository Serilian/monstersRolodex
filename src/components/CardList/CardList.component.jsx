import React from 'react';
import './CardList.styles.css';
import Card from '../Card/Card.component';

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            { monsters.map(monster => (
                <Card 
                key={monster.id}
                name={monster.name}
                email={monster.email} 
                id={monster.id}               
                >{monster.name}</Card>
              ))}
        </div>
    );
};

export default CardList;