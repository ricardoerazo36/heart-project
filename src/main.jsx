import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Layout from "./layout/Layout";
import Disease from "./pages/disease/Disease.jsx";
import Us from "./pages/sobreNosotros/Us.jsx"
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";

// import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enfermedades/:nombre" element={<Disease />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/nosotros" element={<Us />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);