import React from 'react';


function Form(){


  return(
    <form >
      <label>
        Nome:
        <input type="text" 
          name="Nome"
          required/>
      </label>
      <label>
        Endereço:
        <input type="text"
          name="Endereço"
          required
        />
      </label>
      <input 
        type="submit" 
        onClick="calcular();return false" 
        value="Fazer o Pedido"
      />
    </form>
  );
}
export default Form;
