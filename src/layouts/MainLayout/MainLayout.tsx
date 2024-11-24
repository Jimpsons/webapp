import { FC } from "react";
import { Header } from "@/components/composite/Header";
import { Footer } from "@/components/composite/Footer";

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
