import { request } from 'http';
import { FC, useEffect, useState, FormEvent } from 'react';
import { useAxios } from '../../hooks/useAxios';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

type SubmitEvent = FormEvent<HTMLFormElement>

export interface FilterLists {
  ingredients: string[]
  glasses: string[]
}

export interface Drink {
  id: string
  name: string
  thumbnailURL: string
}

export interface DrinkDetail extends Drink {
  category: string
  tags: string[]
  IBA: string
  glass: string
  instructions: string
  alcoholic: true
  ingredients: string[]
  measure: string[]
}

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

  const [ results, setResults ] = useState<Drink[] | []>([])

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

  const [ resultsLoading, resultsData, resultsError, resultsRequest ] = useAxios<ResultsList>(searchRoute, searchTerm)

  const handleSubmit = (e: SubmitEvent) =>
  {
    e.preventDefault()
    drinkRequest()
    setResults(resultsData.drinks)
    console.log(results)
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
