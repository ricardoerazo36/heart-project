import { useParams } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import { modelos } from "../../models/modelsMap";
import "./Disease.css";

const Disease = () => {
  const { nombre } = useParams();
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    import(`../../data/${nombre}.json`)
      .then((modulo) => setInfo(modulo.default))
      .catch(() => setError(true));
  }, [nombre]);

  if (error)
    return <div className="p-4 text-red-600">Enfermedad no encontrada.</div>;

  if (!info) return <div className="p-4">Cargando información...</div>;

  const Modelos = modelos[nombre] || {};

  return (
    <div className="enfermedad">
      <h1 className="nombreEnfermedad">{info.nombre}</h1>
      
      {/* Sección "¿Qué es?" */}
      <div className="seccion-azul">
        <div className="pill-container">
          <span className="pill">¿Qué es?</span>
        </div>
        <div className="contenido-seccion">
          <div className="modelo-container">
            <Suspense fallback={<div>Cargando modelo...</div>}>
              {Modelos.Modelo1 ? <Modelos.Modelo1 /> : <div className="modelo-placeholder">Modelo no disponible</div>}
            </Suspense>
          </div>
          <div className="descripcion-container">
            <p className="descripcion-texto">{info.descripcion}</p>
          </div>
        </div>
      </div>

      {/* Sección "Síntomas" */}
      <div className="seccion-sintomas">
        <h2 className="seccion-titulo">Síntomas</h2>
        <div className="sintomas-grid">
          <div className="sintomas-izquierda">
            <div className="sintomas-container">
              <p className="sintomas-texto">{info.sintomas}</p>
            </div>
          </div>
          <div className="sintomas-derecha">
            <div className="sintomas-imagen">
              <Suspense fallback={<div>Cargando modelo 2...</div>}>
                {Modelos.Modelo2 ? <Modelos.Modelo2 /> : <div className="imagen-placeholder">Imagen no disponible</div>}
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Más secciones */}
      <section className="enfermedadRow">
        <div className="modeloSec">
          <Suspense fallback={<div>Cargando modelo 3...</div>}>
            {Modelos.Modelo3 ? <Modelos.Modelo3 /> : <div className="modelo-placeholder">Modelo no disponible</div>}
          </Suspense>
        </div>
        <div className="text">
          <h2 className="pill">Tratamiento</h2>
          <p>{info.tratamiento}</p>
        </div>
      </section>

      {/* Sección de Prevención */}
      <div className="seccion-prevencion">
        <h2 className="seccion-titulo">¿Cómo prevenirlo?</h2>
        <div className="prevencion-grid">
          <div className="prevencion-izquierda">
            <p className="prevencion-texto">{info.prevencionYcuidado}</p>
          </div>
          <div className="prevencion-derecha">
            <Suspense fallback={<div>Cargando modelo 4...</div>}>
              {Modelos.Modelo4 ? <Modelos.Modelo4 /> : <div className="modelo-placeholder">Modelo no disponible</div>}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disease;