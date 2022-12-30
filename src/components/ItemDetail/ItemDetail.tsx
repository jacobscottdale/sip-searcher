import { FC, useContext, useEffect } from 'react';
import { useAxios } from '../../hooks/useAxios';
import DrinkDetail from '../../models/drinkDetail';
import { CocktailContext } from '../../store/cocktail-context';
import './ItemDetail.css';

const ItemDetail: FC = () =>
{

  const cocktailCtx = useContext(CocktailContext)

  const { loading: detailLoading, data: detailData, error: detailError, request: detailRequest } = useAxios<{ drinks: DrinkDetail[] }>('/id/', cocktailCtx.activeItemId)

  useEffect(() =>
  {
    if (detailData) {
      cocktailCtx.updateItemDetails(detailData?.drinks[ 0 ])
    }
  }, [ detailData, cocktailCtx ])

  return (
    <>
      {cocktailCtx.itemDetails &&
        <div className='ItemDetail'>
          <div className="ItemDetail_imgIngredientContainer">
            <div className="ItemDetail_imgContainer">
              <img className='ItemDetail_img' src={cocktailCtx.itemDetails?.thumbnailURL} alt={cocktailCtx.itemDetails?.name} />
            </div>
            <div className="ItemDetail_ingredientsContainer">
              <h2>{cocktailCtx.itemDetails?.name}</h2>
              <p>Ingredients:</p>
              <ul className="ItemDetail_ingredientsList">
                {cocktailCtx.itemDetails?.ingredients.map((ingredient, idx) => (
                  <li className='ItemDetail_ingredient' key={cocktailCtx.itemDetails?.id + ingredient}>
                    {(cocktailCtx.itemDetails?.measure[ idx ] &&
                      <span className='ingredientMeasure'>
                        {cocktailCtx.itemDetails.measure[ idx ]}
                      </span>
                    )}
                    {' ' + ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p>Instructions:</p>
            <ol className="ItemDetail_instructionsList">
              {cocktailCtx.itemDetails?.instructions.map(instruction =>
              {
                if (!instruction) {
                  return null
                }
                return <li className='ItemDetail_instruction' key={cocktailCtx.itemDetails?.id + instruction}>
                  {instruction}
                </li>
              })}
            </ol>
          </div>

        </div>}
    </>
  );
}

export default ItemDetail;
