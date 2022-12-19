import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import './SearchBar.css';

type SubmitEvent = FormEvent<HTMLFormElement>

type InputEvent = ChangeEvent<HTMLInputElement>

const SearchBar: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)

  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    cocktailCtx.updateQuery(searchQuery)
  }
  return (
    <form id='search-bar' onSubmit={handleSubmit}>

      <label htmlFor='cocktail-search'>Search:</label>
      <input
        id='cocktail-search'
        name='cocktail-search'
        type='text'
        value={searchQuery}
        onChange={(e: InputEvent) => setSearchQuery(e.target.value)}
      />

      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
