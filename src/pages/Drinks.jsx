import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderWithSearchIcon from '../components/HeaderWithSearchIcon';
import MyContext from '../context/MyContext';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

function Drinks() {
  const { respostaDrink } = useContext(MyContext);
  const TREZE = 12;

  if (respostaDrink && respostaDrink.length === 1) {
    return <Redirect to={ `/bebidas/${respostaDrink[0].idDrink}` } />;
  }
  if (respostaDrink === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <HeaderWithSearchIcon title="Bebidas" />
      { respostaDrink && respostaDrink.map((item, index) => (
        <Cards
          key={ index }
          thumbnail={ item.strDrinkThumb }
          index={ index }
          name={ item.strDrink }
        />
      )).slice(0, TREZE)}
      <Footer />
    </div>
  );
}

export default Drinks;
