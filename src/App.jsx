//Pacotes
import React from 'react';
import {  Route,BrowserRouter, Routes} from 'react-router-dom';
import Provider from './context/Provider';

//Componentes
// import Header from './components/Header/Header';
// import Products from './components/Menu/Products';
// import Cart from './components/Cart/Cart';
// import Foot from './components/Foot/Foot';
// import AboutUs from './components/AboutUs/AboutUs';

//Pages
import CadastroPage from './pages/CadastroPage';
import Home from './pages/Home';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}  />
          <Route  path="/cadastro" element={<CadastroPage/>}  />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
