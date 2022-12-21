import { FC, useContext, useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import DrinkDetail from '../../models/drinkDetail';
import { CocktailContext } from '../../store/cocktail-context';
  import './ItemDetail.css';

const ItemDetail: FC = () => {

  const cocktailCtx = useContext(CocktailContext)

  const [ itemDetails, setItemDetails ] = useState<DrinkDetail | null>(null)

  const { loading: detailLoading, data: detailData, error: detailError, request: detailRequest } = useAxios<{drinks: DrinkDetail[]}>('/id/', cocktailCtx.activeItemId)

  useEffect(() => {
    if (detailData) {
      setItemDetails(detailData?.drinks[0])
    }
  }, [ detailData ])

	return (
		<div className='ItemDetail'>
      {!itemDetails && 'loading'}
      {itemDetails && itemDetails?.name}
		</div>
	);
}

export default ItemDetail;
