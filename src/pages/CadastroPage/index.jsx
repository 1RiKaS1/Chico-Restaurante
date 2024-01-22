//Pacotes
import {React, useState} from 'react';
import axios from 'axios';


//Css
import './styled.css';


//Funçao
function CadastroPage (){
  
  //Variaveis
  const [email, SetEmail] = useState();

  async function Cadastro(){
    await axios.post('http://localhost:5173/register', {email})
      .then(response => {console.log(response);} )
      .catch(console.log('deu ruim'));
  }

  return (
    <>
      <h1>Cadastro</h1>
      <form >
        <label>
        Email:
          <input 
            onChange={(e) => {SetEmail(e);}}
            type="text" 
            name="email"
            placeholder="Digite seu email"
            required/>
        </label>
        <label>
        Criar Senha:
          <input 
            type="text"
            name="senha"
            placeholder="Digite sua senha nova"
            required
          />
        </label>
        <input 
          onClick = {() => {Cadastro;}}
          type="submit" 
          value="Cadastrar"
        />
      </form>
    </>
  );
}

export default CadastroPage;
