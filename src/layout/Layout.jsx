/* eslint-disable react/prop-types */
import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main style ={{paddingTop: '80px'}}className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
