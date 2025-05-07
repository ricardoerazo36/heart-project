 
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import HeartModel from './models-3d/HeartModel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Heart Care</h1>
        <h2 className="subtitle">Explorando el corazón de una forma dinámica y visual</h2>
        <p className="app-description">
          Heart Care es una aplicación diseñada para ayudarte a aprender más sobre el 
          corazón humano, qué puede afectarlo y cómo puedes cuidar de él, utilizando consejos
          y datos avalados por la medicina, ilustrados utilizando modelos 3D.
        </p>
      </header>
      
      {/* Visualizador del modelo 3D */}
      <div className="model-banner">
        <HeartModel height="400px" />
      </div>

      <button 
        className="cta-button"
        onClick={() => navigate('/Quiz')}
      >
        Explorar Quiz
      </button>
    </div>
  );
};

/* eslint-disable react/no-unknown-property */
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import HeartModel from './models-3d/HeartModel';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Heart Care</h1>
        <h2 className="subtitle">Explorando el corazón de una forma dinámica y visual</h2>
        <p className="app-description">
          Heart Care es una aplicación diseñada para ayudarte a aprender más sobre el 
          corazón humano, qué puede afectarlo y cómo puedes cuidar de él, utilizando consejos
          y datos avalados por la medicina, ilustrados utilizando modelos 3D.
        </p>
      </header>
      
      {/* Visualizador del modelo 3D */}
      <div className="model-banner">
        <HeartModel height="400px" />
      </div>

      <button 
        className="cta-button"
        onClick={() => navigate('/Quiz')}
      >
        Explorar Quiz
      </button>
    </div>
  );
};

export default Home;