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
    if (searchQuery === '') {
      cocktailCtx.updateResults(null)
    }
  }
  return (
    <div className="SearchBar">
      <form
        className='SearchBar_form'
        id='search-bar-form'
        onSubmit={handleSubmit}
      >
        <div className="formContentContainer">
          <input
            aria-label='search by cocktail name'
            className='searchInput'
            id='search-input'
            name='cocktail-search'
            type='text'
            placeholder='Search by name'
            value={searchQuery}
            onChange={(e: InputEvent) => setSearchQuery(e.target.value)}
          />

          <button className='SearchBar_submitButton' type='submit'>
            Search
          </button>
        </div>

      </form>
    </div>

  );
}

export default SearchBar;
