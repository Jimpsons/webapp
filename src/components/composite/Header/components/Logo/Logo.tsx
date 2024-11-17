import { FC } from "react";
// import { Link } from "react-router-dom";
import LogoImage from "@assets/images/Logo/jimpsons.svg";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <a href="/" className={styles.logo}>
      <img
        src={LogoImage}
        alt="Prophecy Jimpsons"
        className={styles.logoImage}
      />
    </a>
  );
};

export default Logo;
