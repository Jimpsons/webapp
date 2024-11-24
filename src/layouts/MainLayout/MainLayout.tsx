import { FC } from "react";
import { Header } from "@/components/composite/Header";
import { Footer } from "@/components/composite/Footer";
import styles from "./MainLayout.module.css";

const MainLayout: FC = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>{/* Main Content */}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
