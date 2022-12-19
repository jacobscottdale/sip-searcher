import { FC, useContext, useEffect, useState } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import ResultItem from '../ResultItem/ResultItem';
import './ResultsList.css';

const ResultsList: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)
  console.log(cocktailCtx.results)

  return (
    <ul className='ResultsList'>
      {cocktailCtx.results?.map(result =>
        <ResultItem
          key={result.id}
          id={result.id}
          name={result.name}
          thumbnailUrl={result.thumbnailURL}
        />
      )}
    </ul>
  );
}

export default ResultsList;
