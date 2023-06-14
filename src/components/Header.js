import logo from "./logo.png"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.img} alt="company masco" />
      <nav className={styles.nav}>
        <ul className={styles.horizontalmenu}>
          <li><Link className="link" to="/">HOME</Link></li>
          <li><Link className="link" to="/lashes">LASHES</Link></li>
          <li><Link className="link" to="/nail">NAIL BAR</Link></li>
          <li><Link className="link" to="/manipedi">MANI / PEDI</Link></li>
          <li className={styles.dropdown}>
            MORE
            <ul className={styles.verticalmenu}>
              <li><Link className="link" to="/gallery">GALLERY</Link></li>
              <li><Link className="link" to="/contact">CONTACT</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;