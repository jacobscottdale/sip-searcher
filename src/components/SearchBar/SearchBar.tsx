import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { CocktailContext } from '../../store/cocktail-context';
import './SearchBar.css';

type SubmitEvent = FormEvent<HTMLFormElement>

type InputEvent = ChangeEvent<HTMLInputElement>

const SearchBar: FC = () =>
{
  const cocktailCtx = useContext(CocktailContext)

  const [ searchQuery, setSearchQuery ] = useState<string>('')

  const handleSubmit = (e: SubmitEvent) =>
  {
    e.preventDefault()
    cocktailCtx.updateQuery(searchQuery)
  }
  return (
    <div className="SearchBar">
      <form
        className='SearchBar_form'
        id='search-bar-form'
        onSubmit={handleSubmit}
      >
        <label className='SearchBar_searchLabel' htmlFor='search-input'>
          Search:
        </label>
        <input
          className='SearchBar_searchInput'
          id='search-input'
          name='cocktail-search'
          type='text'
          value={searchQuery}
          onChange={(e: InputEvent) => setSearchQuery(e.target.value)}
        />

        <button className='SearchBar_submitButton' type='submit'>
          Search
        </button>
      </form>
    </div>

  );
}

export default SearchBar;
