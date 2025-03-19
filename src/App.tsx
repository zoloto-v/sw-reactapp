import { Route, Routes } from 'react-router';
import './App.css';
import { HomePage } from './pages/home';
import { CharactersPage } from './pages/characters';
import { Page404 } from './pages/page-404';

const App = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/characters'
        element={<CharactersPage />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default App;
