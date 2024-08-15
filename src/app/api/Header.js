import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"
export default function Header(){
    return(
        <header className={styles.cabecalho}>
            
            <nav>
                <ul className={styles.lista}>
                    <Link className={styles.link} href="/">
                    <li>Home</li>
                    </Link>
                    
                    <Link className={styles.link} href="/contato">
                    <li>Contato</li>
                    </Link>

                    <Link className={styles.link} href="/sobre">
                    <li>Sobre Nós</li>
                    </Link>

                </ul>

                <input className={styles.input}></input>
                 <button className={styles.btn}>Buscar Produto</button>
            </nav>
        </header>
    );
}