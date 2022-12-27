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
      <div className="ItemDetail_imgIngredientContainer">
        <div className="ItemDetail_imgContainer">
          <img className='ItemDetail_img' src={itemDetails?.thumbnailURL} alt={itemDetails?.name} />
        </div>
        <div className="ItemDetail_ingredientsContainer">
          <p>{itemDetails?.name}</p>
          <p>Ingredients:</p>
          <ul className="ItemDetail_ingredientsList">
            {itemDetails?.ingredients.map((ingredient, idx) => (
              <li className='ItemDetail_ingredient'>
                - {(itemDetails.measure[ idx ] && itemDetails.measure[ idx ])} {' ' + ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p>Instructions:</p>
        <ol className="ItemDetail_instructionsList">
          {itemDetails?.instructions.map(instruction =>
          {
            if (instruction) {
              return <li className='ItemDetail_instruction'>
                {instruction}
              </li>
            }

          })}
        </ol>
      </div>

    </div>
  );
}

export default ItemDetail;
