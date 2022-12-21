import React, { useState, createContext } from 'react'
import FilterList from '../models/filterList'
import Results from '../models/results'

type CocktailContextObj =
  {
    filterList: FilterList,
    updateFilterList: (newFilterList: FilterList) => void
    query: string,
    updateQuery: (newQuery: string) => void,
    results: Results,
    updateResults: (newResults: Results) => void,
    activeItemId: string,
    updateActiveItemId: (newId: string) => void
  }

export const CocktailContext = createContext<CocktailContextObj>({
  filterList: {
    ingredients: [],
    glasses: []
  },
  updateFilterList: () => {},
  query: '',
  updateQuery: () => {},
  results: null,
  updateResults: () => {},
  activeItemId: '',
  updateActiveItemId: () => {}
})

const CocktailContextProvider: React.FC<{ children?: React.ReactNode }> = props =>
{
  const [ filterList, setFilterList ] = useState<FilterList>({
    ingredients: [],
    glasses: []
  })

  const updateFilterListHandler = (newFilterList: FilterList) =>
  {
    setFilterList(newFilterList)
  }

  const [query, setQuery] = useState<string>('')

  const updateQueryHandler = (newQuery: string) => {
    setQuery(newQuery)
  }

  const [results, setResults] = useState<Results>(null)

  const updateResultsHandler = (newResults: Results) => {
    setResults(newResults)
  }

  const [activeItemId, setActiveItemId] = useState<string>('')

  const updateActiveItemIdHandler = (newId: string) => {
    setActiveItemId(newId)
  }

  const contextValue: CocktailContextObj = {
    filterList: filterList,
    updateFilterList: updateFilterListHandler,
    query: query,
    updateQuery: updateQueryHandler,
    results: results,
    updateResults: updateResultsHandler,
    activeItemId: activeItemId,
    updateActiveItemId: updateActiveItemIdHandler
  }


  return <CocktailContext.Provider value={contextValue}>{props.children}</CocktailContext.Provider>
}

export default CocktailContextProvider