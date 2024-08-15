"use client"
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./main.module.css"
import ErrorGetData from "./ErrorGetData";


export default function Main() {
  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try{
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setListProduct(data);
      setListComplete(data);
      }catch{
          setErrorFetch(true);
      }
    };
    getProduct();
  }, []);

const orderAz = () => {
  const newList = [...listProduct].sort((a, b)=> 
      a.title.localeCompare(b.title)
  );
  setListProduct(newList);
}

const orderZa = () => {
  let newList = [...listProduct].sort((a, b)=> 
      a.title.localeCompare(b.title)
  );
  newList = newList.reverse();
  setListProduct(newList);
}
const searchText = (text) => {
  setSearch(text);
  
  if (text.trim() === ""){
    setListProduct(listComplete);
    return
  }
  const newList =  listProduct.filter((product) => 
    product.title.toUpperCase().trim().includes(search.toUpperCase().trim())
  );   
  setListProduct(newList);
}
if(errorFetch == true){
  return <ErrorGetData/>
}
  if(listProduct[0] == null){
    return <Spinner/>
  }


  return (
   <>
   <div>
   <input className={styles.input} type = "text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)}/>
   <button onClick= {orderAz} > AZ </button>
   <button onClick= {orderZa} > ZA </button>
   <button onClick={orderPrecoMaior} className={styles.btn}>
            {" "}
            Preço Maior
          </button>
          <button onClick={orderPrecoMenor} className={styles.btn}>
            {" "}
            Preço Menor
          </button>
   </div>
    <main className={styles.main}>
      {listProduct.map((products) =>

        <div className={styles.card} key={products.id}>
          <p>{products.title}</p>
          <Image src={products.image}
            width={100}
            height={100} alt="product image" />
        </div>
      )};
    </main>
    </>
  );
}