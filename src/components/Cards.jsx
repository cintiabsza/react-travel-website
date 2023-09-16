import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'> 
            <CardItem  
              src='/images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-12.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='/images/img-16.jpg'
              text='Enjoy the best Mountain Views'
              label='Adrenaline'
              path='/products'
            />
            <CardItem
              src={'/images/img-14.jpg'}
              text='Explore the Sahara Desert on a guided tour'
              label='Adventure'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

/*I've reversed the two final labels to mach with the new images*/