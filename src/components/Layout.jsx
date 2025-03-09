import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RightPlane from "./Planes/RightPlane";
import BottomRightPlane from "./Planes/BottomRightPlane";

const Layout = () => (
  <>
    <Navbar />
    <RightPlane />
    <Outlet />
    <BottomRightPlane />
    <Footer />
  </>
);

export default Layout;
