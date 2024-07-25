'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Rodando from "../app/Componentes/rodando";
import ErrorGetData from "../app/Componentes/ErrorGetData";
import styles from "./page.module.css"
import Link from "next/link";
export default function Home() {

  const [listaProdutos, setListaProdutos] = useState([]);
  const [listaCompleta, setListaCompleta] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFatch, setErrorFatch] = useState(false);



  useEffect(() => {
    const getProdutos = async () => {
      try {

        const response = await fetch("http://localhost:3000/api")
        const data = await response.json();
        setListaProdutos(data);
        setListaCompleta(data);
      } catch {
        setErrorFatch(true);

      }
    };
    getProdutos();
  }, []);

  const OrdenarAZ = () => {
    let newList = [...listaProdutos].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    setListaProdutos(newList);
  }

  const OrdenarZA = () => {
    let newList = [...listaProdutos].sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );
    newList = newList.reverse();
    setListaProdutos(newList);
  }

  const OrdenardoMenorParaMaior = () => {
    let newList = [...listaProdutos].sort((a, b) =>
      a.valor - b.valor
    );
    setListaProdutos(newList);
  }

  const OrdenardoMenorParaMenor = () => {
    let newList = [...listaProdutos].sort((a, b) =>
      a.valor - b.valor
    );
    newList = newList.reverse();
    setListaProdutos(newList);
  }



  const searchText = (text) => {
    setSearch(text);

    if (text.trim() == "") {
      setListaProdutos(listaCompleta);
      return
    }

    const newList = listaProdutos.filter((produtos) =>
      produtos.titulo.toUpperCase().trim().includes(search.toUpperCase().trim()))
    setListaProdutos(newList);
  }

  if (errorFatch == true) {
    return <ErrorGetData />
  }

  if (listaCompleta[0] == null) {
    return <Rodando />
  }



  return (
    <>
      <div>
        <input type="text" value={search} placeholder="Pesquise o Titulo"
          onChange={(event) => searchText(event.target.value)} />


        <button onClick={OrdenarAZ}>A-Z</button>
        <button onClick={OrdenarZA}>Z-A</button>
        <button onClick={OrdenardoMenorParaMenor}>maior</button>
        <button onClick={OrdenardoMenorParaMaior}>menor</button>
      </div>

      <main className={styles.main}>
        {listaProdutos.map((data) =>
          <div key={data.id} className={styles.card}>
            <p>{data.titulo}</p>
            
            <div>
              <Image
                width={300}
                height={300}
                src={data.imagem} />
            </div>

            <p>R${data.valor}</p>
            <p>{data.genero}</p>
            <Link className={styles.link} href={"/Filmes/" + data.id}>
              Ver Mais
            </Link>
          </div>

        )};
      </main>
    </>
  );
}