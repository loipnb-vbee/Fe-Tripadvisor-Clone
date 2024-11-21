import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
