import { Outlet } from "react-router-dom";
import Header from "../Header";
import BeforeFooter from "../BeforeFooter";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header />
      <div className="pt-20">
        <Outlet />
        <BeforeFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
