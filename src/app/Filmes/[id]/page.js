import Image from "next/image";


export default async function Filmes({ params }) {

    const response = await fetch("http://localhost:3000/api/" + params.id);

    const data = await response.json();
    return (
        <div key={data.id}>
            <br />
            <div >
                <p>{data.titulo}</p>
                <div>
                    <Image
                        width={300}
                        height={300}
                        src={data.imagem} />
                </div>
                <p>R${data.valor}</p>
                <p>{data.genero}</p>
            </div>
        </div>
    );
}