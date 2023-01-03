import { FC, useContext } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import './ResultItem.css';

type Props = {
  id: string
  name: string
  thumbnailUrl: string
}

const ResultItem: FC<Props> = ({
  id, name, thumbnailUrl
}) =>
{
  const cocktailCtx = useContext(CocktailContext)

  const isActive = cocktailCtx.activeItemId === id ? ' active' : ''

  const resultItemClickHandler = () =>
  {
    cocktailCtx.updateActiveItemId(id)
  }

  return (
    <div className={'ResultItem' + isActive}>
      <span className='ResultItem_arrow'>
        {`> `}
      </span>
      <button type='button' className='ResultItem_button' onClick={resultItemClickHandler}>
        {name}
      </button>
    </div>
  );
}

export default ResultItem;
