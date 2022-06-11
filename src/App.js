import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/Shared/NavBar';
import Footer from './Components/Shared/Footer';
import AppContextProvider from './Components/context/AppContext';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import CartContextProvider from './Components/context/CartContext';

function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter >
            <div className='relative bg-principal  min-h-screen flex flex-col justify-between pt-16'>
              <header>
                <NavBar />
              </header>

              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
                <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />

              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
