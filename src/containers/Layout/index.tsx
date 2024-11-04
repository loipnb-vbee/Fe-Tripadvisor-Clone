import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full max-w-[1136px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
