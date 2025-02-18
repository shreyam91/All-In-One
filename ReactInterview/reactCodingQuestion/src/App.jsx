import { useEffect, useState } from 'react';
import './App.css'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import PAGE_SIZE from './constants';




function App() {
const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(0);

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
const start = currentPage * PAGE_SIZE;
const end = start + PAGE_SIZE;

const handlePageChange = (n) =>{
  setCurrentPage(n);
}
const goToPreviousPage = () =>{
  setCurrentPage((prev) => prev-1);
}

const goToNextPage = () =>{
  setCurrentPage((prev) => prev+1);
}


  return !products.length ? <h2> No Products found...</h2> :(
    <div>
      <h2>Pagination</h2>
      <Pagination  
        currentPage={currentPage} 
        noOfPages={noOfPages} 
        handlePageChange={handlePageChange} 
        goToPreviousPage={goToPreviousPage} 
        goToNextPage={goToNextPage} 
      />

      <div className='products'>
      {
        products.slice(start,end).map((p) =>( <ProductCard key={p.id} image={p.thumbnail} title={p.title}/> )
      )}
      </div>
    </div>
  )
}

export default App
