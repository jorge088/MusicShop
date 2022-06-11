import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './Components/ItemList/ItemListContainer';
import NavBar from './Components/Shared/NavBar';
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <>
      <BrowserRouter >
          <div className='relative bg-principal  min-h-screen flex flex-col justify-between pt-16'>
            <header>
               <NavBar/>
            </header>
            
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
