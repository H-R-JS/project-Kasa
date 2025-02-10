import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./assets/Layout";
import { AboutPage } from "./Page/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
