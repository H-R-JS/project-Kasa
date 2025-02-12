import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./assets/Layout";
import { AboutPage } from "./Page/AboutPage";
import { HomePage } from "./Page/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
