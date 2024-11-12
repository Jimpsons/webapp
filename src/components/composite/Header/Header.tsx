import { FC } from "react";

import Logo from "./components/Logo";
import classes from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Logo />
      navbar
    </header>
  );
};

export default Header;
