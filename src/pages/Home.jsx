import { useEffect, useState } from "react";

export default function Home(){

    const [produto, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async() => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            }catch {
                alert("A conexão com o API falhou!");
            }
        }
        receberListaProdutos();   
    }, []);

    return (
        <>
        <h1>Lista de Produtos</h1>
        <ul>
            {produto.map(produto => (
                <li key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: R${produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
        </ul>
       </>
    );
}
