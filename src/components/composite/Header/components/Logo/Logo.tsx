import { FC } from "react";
// import { Link } from "react-router-dom";
import classes from "./Logo.module.css";
import LogoImage from "@assets/images/Logo/jimpsons.svg";

const Logo: FC = () => {
  return (
    <>
      <img
        src={LogoImage}
        alt="Prophecy Jimpsons"
        className={classes.logoImage}
      />
    </>
  );
};

export default Logo;
