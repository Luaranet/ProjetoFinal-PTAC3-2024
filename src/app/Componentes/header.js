import styles from "./header.module.css"

export default function Header() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_div}>
                <p>Shop da Lulu</p>
            </div>
        </nav>
    );
};