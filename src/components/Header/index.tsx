import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link className={styles.logo} to="/">
          PROJETO CRIPTO
        </Link>
      </div>
    </header>
  );
}
