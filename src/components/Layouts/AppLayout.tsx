import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
      <div className="layout">
        <NavBar />
        <main className="mt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}
export default AppLayout;