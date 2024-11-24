import { FC } from "react";
import { Header } from "@/components/composite/Header";
import Hero from "@/components/composite/Hero";

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default MainLayout;
