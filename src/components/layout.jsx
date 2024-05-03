import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
function Layout() {
  return (
    <div className="high-navbar">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
