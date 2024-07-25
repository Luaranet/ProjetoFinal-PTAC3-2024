// Footer.js

import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <ul>
                <h2>Redes Sociais</h2>
                
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="http://pluspng.com/img-png/instagram-icon-png-instagram-icon-1600.png"
                        alt="Instagram"
                    />
                </li>
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente.png?fit=1600%2C1600&ssl=1"
                        alt="WhatsApp"
                    />
                </li>
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="https://www.iconninja.com/files/424/88/63/facebook-black-icon.png"
                        alt="Facebook"
                    />
                </li>
                <li className={styles.lista}>
                    <Image
                        width={30}
                        height={30}
                        src="https://i.pinimg.com/736x/20/9b/d8/209bd859c265e7ffc4bfeb75877b23f7.jpg"
                        alt="Minha Logo"
                    />
                </li>
            </ul>
        </footer>
    );
}
