import Head from "next/head";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Proweb Blogs</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
