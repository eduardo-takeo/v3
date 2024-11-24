import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Projects from "./views/Projects/Projects";

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider;
