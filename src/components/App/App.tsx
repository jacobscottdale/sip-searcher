import { FC, useEffect, useState, FormEvent } from 'react';
import { useAxios } from '../../hooks/useAxios';
import SearchBar from '../SearchBar/SearchBar';
import FilterLists from '../../models/filterLists'
import Drink from '../../models/drink';
import DrinkDetail from '../../models/drinkDetail';
import './App.css';

type SubmitEvent = FormEvent<HTMLFormElement>







interface ResultsList {
  drinks: Drink[] | DrinkDetail[]
}

const App: FC = () =>
{
  const [ filterLoading, filterData, filterError, filterRequest ] = useAxios<FilterLists | undefined>('list/')

  const [ searchTerm, setSearchTerm ] = useState<string>('')

  const [ searchRoute, setSearchRoute ] = useState<string>('drink/')

  const [ drinkLoading, drinkData, drinkError, drinkRequest ] = useAxios<ResultsList>(searchRoute, searchTerm)

  const [ ingredientsList, setIngredientsList ] = useState<string[]>([])

  const [ glassesList, setGlassesList ] = useState<string[]>([])

  const [ results, setResults ] = useState<Drink[] | DrinkDetail[]>([])

  useEffect(() =>
  {
    filterRequest()
    if (!filterLoading) {
      if (filterData) {
        setIngredientsList(filterData.ingredients)
        setGlassesList(filterData.glasses)
      }
    }
  }, [])

  const [ resultsLoading, resultsData, resultsError, resultsRequest ] = useAxios<Drink[] | DrinkDetail[]>(searchRoute, searchTerm)

  const handleSubmit = (e: SubmitEvent) =>
  {
    // const newResults = resultsData.drinks
    // e.preventDefault()
    // drinkRequest()
    // setResults(newResults)
    // console.log(results)
  }

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchRoute={searchRoute}
        setSearchRoute={setSearchRoute}
        results={results}
        setResults={setResults}
        handleSubmit={handleSubmit}
        ingredientsList={ingredientsList}
        glassesList={glassesList}
      />
    </>
  );
}

export default App;
