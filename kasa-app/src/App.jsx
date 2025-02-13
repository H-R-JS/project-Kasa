import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./assets/Layout";
import { AboutPage } from "./Page/AboutPage";
import { HomePage } from "./Page/HomePage";
import { HousePage } from "./Page/HousePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="house/:id" element={<HousePage />} />
      </Route>
    </Routes>
  );
}

export default App;
