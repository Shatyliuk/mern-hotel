import Footer from "@/components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero />

      <div className="container mx-auto py-10 flex-1">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;