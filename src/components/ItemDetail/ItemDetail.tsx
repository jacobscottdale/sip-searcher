import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios';
import DrinkDetail from '../../models/drinkDetail';
  import './ItemDetail.css';

const ItemDetail: FC = () => {
  const params = useParams()

  const [ itemDetails, setItemDetails ] = useState<DrinkDetail | null>(null)

  const { loading: detailLoading, data: detailData, error: detailError, request: detailRequest } = useAxios<DrinkDetail>('/id/', params.id, true)

  useEffect(() => {
    setItemDetails(detailData)
  }, [ detailData ])

  // Add working conditional rendering

	return (
		<div className='ItemDetail'>
      {detailData && detailData?.IBA}
		</div>
	);
}

export default ItemDetail;
