import { FC } from "react";

import Logo from "./components/Logo";
import styles from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
