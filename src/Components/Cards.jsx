import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nuestro Menu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img='alfredo-8305773_1280.jpg'
              description='Fettuccine con salsa Alfredo rica hecha con crema y queso parmesano.'
              label='Fettuccine Alfredo'
              price= '$10000'
          
            />
            <CardItem
              img='dessert-1786311_1280.jpg'
              description='Travel through the Islands of Los Roques in a Private Cruise'
              label='Cannelloni'
              price= '$3500'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img='lasagne-1178514_1280.jpg'
              description='Capas de pasta con salsa de carne, queso y bechamel.'
              label='Lasaña'
              price= '$12500'
            />
            <CardItem
              img='pasta-712664_1280.jpg'
              description='plato clásico italiano con una salsa cremosa hecha de yemas de huevo, queso Pecorino Romano, y panceta crujiente.'
              label='Spaghetti alla Carbonara'
              price= '$11000'
            
            />
            <CardItem
              img='pizza-5179939_1280.jpg'
              description='Pizza Margherita clásica con salsa de tomate, mozzarella y albahaca.'
              label='Pizza Margherita'
              price= '$14000'
             
            />
              <CardItem
              img='ravioli-7379303_1280.jpg'
              description='Ravioles rellenos de queso ricotta y espinacas, servidos con una cremosa salsa de champiñones.'
              label='Ravioli'
              price= '$9500'
             
            />
             <CardItem
              img='tiramisu-1033207_1280.jpg'
              description='Postre italiano clásico hecho con dedos de dama sumergidos en café, capas con crema de mascarpone.'
              label='Tiramisú'
              price="$5000" 
            />
            <CardItem
              img='pasta-329522_1280.jpg'
              description='Es una salsa de carne tradicional italiana, hecha con carne molida, cebolla, zanahoria, apio, tomate, vino y especias'
              label='Ragú alla Bolognese'
              price="$10000" 
            />
            <CardItem
              img='frutti-di-mare-recipe-card.jpg'
              description='Plato típico de la cocina italiana, es una mezcla de mariscos variados, como camarones, mejillones y calamares '
              label='Frutti di Mare'
              price="$18000" 
            />
            <CardItem
              img='gnocchi-5364564_1280.jpg'
              description='Bollos de papa suaves servidos con una salsa de gorgonzola.'
              label='Gnocchi'
              price="$7000" 
            />
            <CardItem
              img='pepperoni-2571392_1280.jpg'
              description='Pizza de pepperoni con masa fina, cubierta con rodajas de pepperoni y mozzarella.'
              label='Pepperoni Pizza'
              price="$9000" 
            />
            <CardItem
              img='pizza-386717_1280.jpg'
              description='Pizza dividida en cuatro secciones, cada una con diferentes ingredientes que representan las cuatro estaciones.'
              label='Pizza Quattro Stagioni'
              price="$11000" 
            />
          </ul>
          <h2>Veni a Visitarnos para Conocer mas de Nuestro Menu </h2>
        </div>
      </div>
    </div>
  );
}

export default Cards;
