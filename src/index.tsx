import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import CocktailContextProvider from './store/cocktail-context'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <CocktailContextProvider>
      <App />
    </CocktailContextProvider>
);

