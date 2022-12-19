import { FC, useEffect, useContext } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import { CocktailContext } from '../../store/cocktail-context'
import { useAxios } from '../../hooks/useAxios';
import Search from '../../components/Search/Search'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import FilterList from '../../models/filterList'
import Results from '../../models/results';
import './App.css';

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
    searchRequest(cocktailCtx.query)
  }, [ cocktailCtx.query ])

  useEffect(() =>
  {
    if (searchData !== null) {
      cocktailCtx.updateResults(searchData.drinks)
      console.log(searchData)
    }
  }, [ searchData ])

  return (
    <Routes>
      <Route path='/' element={<Search/>}/>
      
      <Route path='/drink/:id' element={<ItemDetail/>}/>
    </Routes>
  );
}

export default App;
