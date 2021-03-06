import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getRandomFood } from '../services/getFood';
import Button from '../components/Button';

function ExploreFoods() {
  const [idMeal, setIdMeal] = useState('');
  useEffect(() => {
    const getIdFromRandomFood = async () => {
      setIdMeal(await getRandomFood());
    };
    getIdFromRandomFood();
  }, []);

  return (
    <>
      <Header title="Explorar Comidas" />
      <Link to="/explorar/comidas/ingredientes">
        <Button text="Explorar Por Ingredientes" dataID="explore-by-ingredient" />
      </Link>
      <Link to="/explorar/comidas/area">
        <Button text="Explorar Por Local de Origem" dataID="explore-by-area" />
      </Link>
      <Link to={ `/comidas/${idMeal}` }>
        <Button text="Me Surpreenda!" dataID="explore-surprise" />
      </Link>
      <Footer />
    </>
  );
}

export default ExploreFoods;
