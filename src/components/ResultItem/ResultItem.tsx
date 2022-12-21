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

  const updateActiveItemIdHandler = () => {
    cocktailCtx.updateActiveItemId(id)
  }

  return (
    <div className='ResultItem' onClick={updateActiveItemIdHandler}>
        {name}
    </div>
  );
}

export default ResultItem;
