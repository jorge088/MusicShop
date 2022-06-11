import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/Shared/NavBar';
import Footer from './Components/Shared/Footer';
import AppContextProvider from './Components/context/AppContext';

function App() {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter >
          <div className='relative bg-principal  min-h-screen flex flex-col justify-between pt-16'>
            <header>
              <NavBar />
            </header>

            <Routes>
              <Route path='/' element={<ItemListContainer />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
}

export default App;
