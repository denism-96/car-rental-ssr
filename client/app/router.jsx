import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound";
import FaqPage from "../pages/FaqPage";
import CarsPage from "../pages/CarsPage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
