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

  console.log(Modelos);
  return (
    <div className="enfermedad">
      <div className="nombreEnfermedad">{info.nombre}</div>

      <section className="enfermedadColumna">
        <div className="modeloContainer">
          <h2 className="modelo-titulo">Interactúa con este modelo y conoce más sobre esta enfermedad desplazándote hacia abajo </h2>
          <div className="modeloPal">
            <Suspense fallback={<div>Cargando modelo 1...</div>}>
              {Modelos.Modelo1 ? <Modelos.Modelo1 /> : <img src="/imagenes/fallo.png" alt="fallo" />}
            </Suspense>
          </div>
        </div>
        <div className="text">
          <h2 className="pill">¿Qué es?</h2>
          <p>{info.descripcion}</p>
        </div>
      </section>

      <section className="enfermedadRow">
        <div className="text">
          <h2 className="pill">Síntomas</h2>
          <p>{info.sintomas}</p>
        </div>
        <div className="modeloContainer">
          <h3 className="modelo-titulo">Interactúa con este modelo</h3>
          <Suspense fallback={<div>Cargando modelo 2...</div>}>
            {Modelos.Modelo2 ? <Modelos.Modelo2 /> : <img src="/imagenes/fallo.png" alt="fallo" />}
          </Suspense>
          <p className="modelo-instruccion">Continúa explorando para más información</p>
        </div>
      </section>

      <section className="enfermedadRow">
        <div className="modeloContainer">
          <h3 className="modelo-titulo">Interactúa con este modelo</h3>
          <div className="modeloSec">
            <Suspense fallback={<div>Cargando modelo 3...</div>}>
              {Modelos.Modelo3 ? <Modelos.Modelo3 /> : <img src="/imagenes/fallo.png" alt="fallo" />}
            </Suspense>
          </div>
          <p className="modelo-instruccion">Descubre más detalles sobre esta enfermedad abajo</p>
        </div>
        <div className="text">
          <h2 className="pill">Tratamiento</h2>
          <p>{info.tratamiento}</p>
        </div>
      </section>

      <section className="enfermedadRow">
        <div className="text">
          <h2 className="pill">Prevención y cuidados</h2>
          <p>{info.prevencionYcuidado}</p>
        </div>
        <div className="modeloContainer">
          <h3 className="modelo-titulo">Interactúa con este modelo</h3>
          <div className="modeloSec">
            <Suspense fallback={<div>Cargando modelo 4...</div>}>
              {Modelos.Modelo4 ? <Modelos.Modelo4 /> : <img src="/imagenes/fallo.png" alt="fallo" />}
            </Suspense>
          </div>
          <p className="modelo-instruccion">Gracias por explorar esta información</p>
        </div>
      </section>
    </div>
  );
};

export default Disease;