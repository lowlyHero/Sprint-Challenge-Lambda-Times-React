import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cardData.map(card => (
        <Card key={card.headline} card={card} />
      ))}
    </div>
  )
}

Cards.propTypes = {

}

export default Cards;