import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function MainLayout() {
  return (
    <div className="container relative flex min-h-screen flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
