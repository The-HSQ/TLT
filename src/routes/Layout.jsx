import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BeforeFooter from "../components/Layout/BeforeFooter";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div>
      <Header />
      <div className=" pt-[69px] md:pt-[75px] ">
        <Outlet />
        <BeforeFooter />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
