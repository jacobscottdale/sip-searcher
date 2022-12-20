import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios';
import DrinkDetail from '../../models/drinkDetail';
  import './ItemDetail.css';

const ItemDetail: FC = () => {
  const params = useParams()

  const [ itemDetails, setItemDetails ] = useState<DrinkDetail | null>(null)

  const { loading: detailLoading, data: detailData, error: detailError, request: detailRequest } = useAxios<{drinks: DrinkDetail[]}>('/id/', params.id, true)

  useEffect(() => {
    if (detailData) {
      setItemDetails(detailData?.drinks[0])
    }
  }, [ detailData ])

  // Add working conditional rendering

	return (
		<div className='ItemDetail'>
      {!itemDetails && 'loading'}
      {itemDetails && itemDetails?.name}
		</div>
	);
}

export default ItemDetail;
