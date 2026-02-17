import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import App from "./App";
import Projects from "./views/Projects/Projects";

const RoutesHOC = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Routes>{children}</Routes>;
};

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <RoutesHOC>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </RoutesHOC>
    </BrowserRouter>
  );
};

export default RoutesProvider;
