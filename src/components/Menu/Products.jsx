//Pacotes
import React, { useEffect, useContext}from 'react';

//Components
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../DishesCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

//Css
import './Products.css';



function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <div>
        <h1 className="products-title">- Cardápio -</h1>
        <section className="products container">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
      </div>
    )
    
  );
}

export default Products;



// function Products(){

//   //Variaveis
//   const [products, setProducts,loading,setLoading] = useContext(AppContext);//puxando do contexto

   
//   // Aqui onde ele pega os dados dos produtos
//   useEffect(() => {
//   //Aqui ele ta puxando na query iphone e rodando o loading
//     fetchProdcuts('iphone').then((reponse) =>{
//       setProducts(reponse);
//       setLoading(false);
//     });
//   }, []);

//   return(
//     //Condiçao pro loading
//     (loading && <Loading/> )
//     ||
//     ( <section className="products container">
//       {/* Passando os dados pro componente product data */}
//       {
//         products.map((product) => <ProductCard key={product.id} data={product} />)
//       }
//     </section>)
//   );
// }

// export default Products;
