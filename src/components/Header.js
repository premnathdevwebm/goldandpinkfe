import logo from "./logo.png"
import styles from "./Header.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.img} alt="company masco" />
      <nav className={styles.nav}>
        <ul className={styles.horizontalmenu}>
          <li>HOME</li>
          <li>LASHES</li>
          <li>NAIL BAR</li>
          <li>MANI / PEDI</li>
          <li className={styles.dropdown}>
            MORE
            <ul className={styles.verticalmenu}>
              <li>GALLERY</li>
              <li>CONTACT</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;