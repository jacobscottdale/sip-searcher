import { ChangeEvent, FC, FormEvent } from 'react';
import Drink from '../../models/drink'
import DrinkDetail from '../../models/drinkDetail';
import './SearchBar.css';

type SubmitEvent = FormEvent<HTMLFormElement>

type InputEvent = ChangeEvent<HTMLInputElement>

type Props =
  {
    results: Drink[] | DrinkDetail[]
    setResults: (val: []) => void
    searchTerm: string
    setSearchTerm: (val: string) => void
    searchRoute: string
    setSearchRoute: (val: string) => void
    handleSubmit: (e: SubmitEvent) => void
    ingredientsList: string[]
    glassesList: string[]
  }

const SearchBar: FC<Props> = ({
  results,
  setResults,
  searchTerm,
  setSearchTerm,
  searchRoute,
  setSearchRoute,
  handleSubmit,
  ingredientsList,
  glassesList
}) =>
{
  return (
    <form id='search-bar' onSubmit={handleSubmit}>

      <label htmlFor='cocktail-search'>Search:</label>
      <input
        id='cocktail-search'
        name='cocktail-search'
        type='text'
        value={searchTerm}
        onChange={(e: InputEvent) => setSearchTerm(e.target.value)}
      />

      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
