import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FlyingPlanes from "./Planes/FlyingPlanes";
import TopPlanes from "./Planes/TopPlanes";
import MiddlePlanes from "./Planes/MiddlePlanes";
import BottomPlanes from "./Planes/BottomPlanes";

const Layout = () => (
  <>
    <TopPlanes />
    <div className="relative">
      <Navbar />
    </div>
    <MiddlePlanes />
    <Outlet />
    <BottomPlanes />

    <Footer />
  </>
);

export default Layout;
