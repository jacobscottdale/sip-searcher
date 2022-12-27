import { FC, useContext, useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import DrinkDetail from '../../models/drinkDetail';
import { CocktailContext } from '../../store/cocktail-context';
import './ItemDetail.css';

const ItemDetail: FC = () =>
{

  const cocktailCtx = useContext(CocktailContext)

  const [ itemDetails, setItemDetails ] = useState<DrinkDetail | null>(null)

  const { loading: detailLoading, data: detailData, error: detailError, request: detailRequest } = useAxios<{ drinks: DrinkDetail[] }>('/id/', cocktailCtx.activeItemId)

  useEffect(() =>
  {
    if (detailData) {
      setItemDetails(detailData?.drinks[ 0 ])
    }
  }, [ detailData ])

  return (
    <div className='ItemDetail'>
      <div className="ItemDetail_thumbnailContainer">
        <img className='ItemDetail_thumbnail' src={itemDetails?.thumbnailURL} alt={itemDetails?.name} />
      </div>
      <div className="ItemDetail_content">
        <p>{itemDetails?.name}</p>
        {itemDetails?.ingredients.map(((ingredient, idx) => (
          <p>{(itemDetails.measure[idx] && itemDetails.measure[idx])} {ingredient}</p>
        )))}
      </div>

    </div>
  );
}

export default ItemDetail;
