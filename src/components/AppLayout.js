import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const AppLayout = () => (
  <div className="App">
    <Navbar />
    <ScrollToTop />
    <Outlet />
    <Footer />
  </div>
);

export default AppLayout;
