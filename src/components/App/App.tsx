import { FC, useEffect, useContext } from 'react';
import { CocktailContext } from '../../store/cocktail-context'
import { useAxios } from '../../hooks/useAxios';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import FilterList from '../../models/filterList'
import Results from '../../models/results';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

const App: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)

  const { loading: filterLoading, data: filterData, error: filterError } = useAxios<FilterList>('/list/')

  const { loading: searchLoading, data: searchData, error: searchError, request: searchRequest } = useAxios<{ drinks: Results }>('/drink/', cocktailCtx.query, false)

  useEffect(() =>
  {
    if (filterData) {
      cocktailCtx.updateFilterList({
        ingredients: filterData.ingredients,
        glasses: filterData.glasses
      })
    }

  }, [ filterData ])

  useEffect(() =>
  {
    if (cocktailCtx.query) {
      searchRequest(cocktailCtx.query)
    }
    cocktailCtx.updateActiveItemId('')
    cocktailCtx.updateItemDetails(null)
  }, [ cocktailCtx.query ])

  useEffect(() =>
  {
    if (searchData !== null) {
      cocktailCtx.updateResults(searchData.drinks)
      console.log(searchData)
    }
  }, [ searchData ])

  return (
    <div className='App'>
      <SearchBar />
      <div className='ResultsContainer'>
        {cocktailCtx.results && <ResultsList />}
        {cocktailCtx.results && cocktailCtx.results.length < 1 && <p>No results</p>}
        {cocktailCtx.activeItemId && <ItemDetail />}
      </div>

    </div>

  );
}

export default App;
