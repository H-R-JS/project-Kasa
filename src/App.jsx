import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./assets/Layout";
import { AboutPage } from "./Page/AboutPage";
import { HomePage } from "./Page/HomePage";
import { HousePage } from "./Page/HousePage";
import { ErrorPage } from "./Page/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<AboutPage />} />
        <Route index element={<HomePage />} />
        <Route path="house/:id" element={<HousePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
