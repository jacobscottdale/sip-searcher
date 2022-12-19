import React, { useContext } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';
import { CocktailContext } from '../../store/cocktail-context';

const Search = () =>
{
  const cocktailCtx = useContext(CocktailContext)
  return (
    <>
      <SearchBar />
      {cocktailCtx.results && <ResultsList />}
    </>)
}

export default Search