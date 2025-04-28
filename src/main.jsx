import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
<<<<<<< HEAD
=======
import NotFound from "./pages/not-found/NotFound";
import Heart from "./pages/heart/Heart";
import HighBloodPressure from "./pages/heart/high-blood-pressure/HighBloodPressure";
import LowBloodPressure from "./pages/heart/low-blood-pressure/LowBloodPressure";
import InsuficienciaCardiaca from "./pages/heart/insuficiencia-cardiaca/InsuficienciaCardiaca";
import "./index.css";
>>>>>>> origin/rem
import Layout from "./layout/Layout";
import Disease from "./pages/disease/Disease.jsx";
import Us from "./pages/sobreNosotros/Us.jsx"
// import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/enfermedades/:nombre" element={<Disease />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/nosotros" element={<Us />} />
=======
        <Route index path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="corazon" element={<Heart />}>
          <Route path="presion-alta" element={<HighBloodPressure />} />
          <Route path="presion-baja" element={<LowBloodPressure />} />
          <Route path="insuficiencia-cardiaca" element={<InsuficienciaCardiaca />} />
        </Route>
>>>>>>> origin/rem
      </Routes>
    </Layout>
  </BrowserRouter>
);