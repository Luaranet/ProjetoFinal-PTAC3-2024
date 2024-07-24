import { NextResponse } from "next/server";

export const listaDeFilmes = [
    {
        titulo: "Continecias ao amor",
        imagem: "https://m.media-amazon.com/images/I/81eGPUCPMVL._AC_UL480_FMwebp_QL65_.jpg",
        valor: 45.90,
        genero:"Romance",
        id: 1
      },
      {
        titulo: "A cinco passos de você",
        imagem: "https://m.media-amazon.com/images/I/4164jpw+6lL._SY344_BO1,204,203,200_.jpg",
        valor: 33.90,
        genero:"Romance",
        codigo: 2
      },
      {
        titulo: "Como eu era antes de você",
        imagem: "produtos/como eu era antes de vc.png",
        valor: 39.90, 
        genero:"Romance",
        codigo: 3
      },
      {
        titulo: "Harry potter e a ordem da fenix",
        imagem: "https://m.media-amazon.com/images/I/818N6iCEj5L._AC_UL320_.jpg",
        valor: 49.90,
        genero:"Ficção Científica",
        codigo: 4
      },
      {
        titulo: "Harry potter e a pedra filosofal",
        imagem: "https://m.media-amazon.com/images/I/81VoyKsn-0L._AC_UL480_FMwebp_QL65_.jpg",
        valor: 49.90,
        genero:"Ficção Científica",
        codigo: 5
      },
      {
        titulo: "Homem aranha: sem volta para casa",
        imagem: "https://m.media-amazon.com/images/I/91wofh0ruwL._AC_UL320_.jpg",
        valor: 39.90,
        genero:"Ficção Científica",
        codigo: 6
      }, 
];

export async function GET(){
    return NextResponse.json(listaDeFilmes)
}