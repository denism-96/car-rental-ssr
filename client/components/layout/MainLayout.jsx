import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function MainLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
