import './styles/App.css';
import { Outlet } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <>
      <FavoritesProvider>
        <Outlet />
      </FavoritesProvider>
    </>
  );
}

export default App;


