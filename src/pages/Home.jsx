import { useEffect, useState } from "react";
import styles from '../styles/listarProdutos.module.css';

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
        <header className={styles.header}>
            <a href="/logo" className={styles.link}>
                        <img src="/src/assets/logo.svg" alt="logo" className={styles.logo} /> 
                    </a>
                <h1 className={styles.title}>Empresas MB</h1>
                <nav className={styles.nav}>
                    <a href="/cart" className={styles.link}>
                        <img src="/src/assets/cart.svg" alt="Carrinho" className={styles.icone} /> 
                    </a>
                    <a href="/cart1" className={styles.link}>
                        <img src="/src/assets/cart1.png" alt="Login" className={styles.icone} /> 
                    </a>
                </nav>
        </header>

        <div className={styles.cabecalho}>
        <h1 className={styles.titulo}>Lista de Produtos</h1>
        </div>
        
        <ul className={styles.blocoLista}>
            {produto.map(produto => (
                <li key={produto.id} className={styles.card}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: R${produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={100}/>
                </li>
            ))}
        </ul>
        
        <footer className={styles.rodape}>
                <nav>
                    <ul> 
                        <li>Termos de Serviço</li>
                        <li>Política de Privacidade</li>
                        <li>Contato</li>
                    </ul>
                </nav>
                <p className={styles.fim}>&copy; 2024 Produtos MB. Todos os direitos reservados.</p>
        </footer>
       </>
    );
}
