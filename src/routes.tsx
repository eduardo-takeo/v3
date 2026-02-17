import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import App from "./App";
import Projects from "./views/Projects/Projects";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider;
