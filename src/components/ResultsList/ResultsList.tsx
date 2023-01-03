import { FC, useContext } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import ResultItem from '../ResultItem/ResultItem';
import './ResultsList.css';

const ResultsList: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)

  const preloadImage = (url: string) =>
  {
    return new Promise((resolve, reject) =>
    {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  return (
    <div className="ResultsList">
      <ul className='ResultsList_list'>
        {cocktailCtx.results?.map(result =>
        {
          preloadImage(result.thumbnailURL)
          return (
            <li className='ResultsList_item' key={result.id}>
              <ResultItem
                id={result.id}
                name={result.name}
                thumbnailUrl={result.thumbnailURL}
              />
            </li>
          )
        })}
      </ul>
    </div>

  );
}

export default ResultsList;
