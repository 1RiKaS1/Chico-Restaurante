//Pacotes
import React from 'react';

//Components
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import { FaBars } from 'react-icons/fa';

//Css
import './Header.css';


function Header(){
  return(
    <header className="header" >
      
      <div className="container">
        <h1>Chico Delícias</h1>
        <SearchBar/>
        <CartButton/>
        <FaBars className="burger"/>
      </div>
    </header>
  );
}

export default Header;
