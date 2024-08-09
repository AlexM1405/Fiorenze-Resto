import React from 'react';

function CardItem({ label, description, img, price }) {
  return (
    <li className='card-item'>
      <figure className='card-item-figure'>
        <img className='card-item-img' src={img} alt={description} />
      </figure>
      <div className='card-item-info'>
        <h3 className='card-item-label'>{label}</h3>
        <p className='card-item-text'>{description}</p>
        <span className='card-item-price'>{price}</span>
      </div>
    </li>
  );
}

export default CardItem;