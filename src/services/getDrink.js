const renamingLargeNumberOfKeys = (list) => {
  if (!list) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    return [];
  }
  return list.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic } = item;
    const { strCategory, strInstructions } = item;
    return (
      {
        id: idDrink,
        name: strDrink,
        type: 'bebida',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        image: strDrinkThumb,
        area: '',
        video: '',
        instruction: strInstructions,
        ...item,
      });
  });
};

const renamingSmallNumberOfKeys = (list) => {
  if (!list) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    return [];
  }
  return list.map(({ idDrink, strDrink, strDrinkThumb }) => (
    {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      type: 'bebida',
    }));
};

const URL_INGREDIENTE = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const getDrinkIngrediente = async (param) => {
  const response = await fetch(`${URL_INGREDIENTE}${param}`)
    .then((resolve) => resolve.json());

  return renamingSmallNumberOfKeys(response.drinks);
};

const URL_NOME = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const getDrinkNome = async (param) => {
  const response = await fetch(`${URL_NOME}${param}`)
    .then((resolve) => resolve.json());

  return renamingLargeNumberOfKeys(response.drinks);
};

const URL_PRIMEIRALETRA = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export const getDrinkPrimeiraletra = async (param) => {
  const response = await fetch(`${URL_PRIMEIRALETRA}${param}`)
    .then((resolve) => resolve.json());

  return renamingLargeNumberOfKeys(response.drinks);
};

const URL_CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

export const getCategorylist = async () => {
  const response = await fetch(URL_CATEGORIES);
  const resolve = await response.json();
  return resolve.drinks.map(({ strCategory }) => ({ category: strCategory }));
};

const URL_DRINK_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export const getDrinksCategory = async (param) => {
  const response = await fetch(`${URL_DRINK_CATEGORY}${param}`)
    .then((resolve) => resolve.json());

  return renamingSmallNumberOfKeys(response.drinks);
};

const URL_DRINK_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const getDrinksID = async (param) => {
  const response = await fetch(`${URL_DRINK_ID}${param}`)
    .then((resolve) => resolve.json());

  return renamingLargeNumberOfKeys(response.drinks)[0];
};

const URL_DRINK_RANDOM = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const getRandomDrink = async () => {
  const response = await fetch(URL_DRINK_RANDOM)
    .then((resolve) => resolve.json());

  return renamingLargeNumberOfKeys(response.drinks)[0].idDrink;
};

const URL_INGREDIENTS_LIST = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export const getIngredientList = async () => {
  const response = await fetch(URL_INGREDIENTS_LIST);
  const resolve = await response.json();
  return resolve.drinks;
};
