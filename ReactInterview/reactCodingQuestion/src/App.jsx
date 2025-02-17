import { useEffect, useState } from 'react';
import './App.css'

const ProductCard = ({image,title}) =>{
  return <div className='product-card'> 
    <img src={image} alt={title} className='product-img'/>
    <span className='product-title'>{title}</span>
  </div>
}

const PAGE_SIZE = 5;

function App() {
const [products, setProducts] = useState([]);

const fetchData = async () =>{
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  setProducts(json.products);
}

useEffect(() =>{
  fetchData();
},[])

const totalProducts = products.length;
const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);

  return !products.length ? <h2> No Products found...</h2> :(
    <div>
      <h2>Pagination</h2>
      <div>
        {[...Array[10].keys()]}
      </div>
      <div className='products'>
      {
        products.map((p) =>( <ProductCard key={p.id} image={p.thumbnail} title={p.title}/> )
      )}
      </div>
    </div>
  )
}

export default App
