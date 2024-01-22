//Pacotes
import {React} from 'react';


//Css
import './styled.css';

import Headers from '../../components/Header/Header';
import AboutUs from '../../components/AboutUs/AboutUs';
import Products from '../../components/Menu/Products';
import Cart from '../../components/Cart/Cart';
import Foot from '../../components/Foot/Foot';

//Funçao
function Home (){
 
  return (
    <>
      <Headers/>
      <AboutUs/>
      <Products />
      <Cart />
      <Foot/> 
    </>
  );
}

export default Home;
