import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
