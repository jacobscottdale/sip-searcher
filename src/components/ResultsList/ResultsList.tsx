import { FC, useContext } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import ResultItem from '../ResultItem/ResultItem';
import './ResultsList.css';

const ResultsList: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)

  return (
    <div className="ResultsList">
      <ul className='ResultsList_list'>
        {cocktailCtx.results?.map(result => (
          <li className='ResultsList_item' key={result.id}>
            <ResultItem
              id={result.id}
              name={result.name}
              thumbnailUrl={result.thumbnailURL}
            />
          </li>
        )
        )}
      </ul>
    </div>

  );
}

export default ResultsList;
