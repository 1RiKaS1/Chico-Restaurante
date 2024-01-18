//Pacotes
import React from 'react';

//Componentes
import Header from './components/Header/Header';
import Products from './components/Menu/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import Foot from './components/Foot/Foot';
import AboutUs from './components/AboutUs/AboutUs';

function App() {

  return (
    <Provider>
      <Header />
      <AboutUs/>
      <Products />
      <Cart />
      <Foot/>
    </Provider>
  );
}

export default App;
