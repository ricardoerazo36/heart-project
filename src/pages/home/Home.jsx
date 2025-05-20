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

      {/* Sección "¡Descubre tu corazón!" */}
      <div className="discover-section">
        <p className="section-title">¡Descubre tu corazón!</p>
        <p className="section-description">
          Explora nuestro contenido interactivo para aprender todo sobre el corazón, 
          sus características y cómo cuidarlo para mantenerlo saludable durante toda tu vida.
        </p>
      </div>
      {/* Sección "¡Aprende de las enfermedades cardíacas!" */}
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
        ¡Aprende de las enfermedades cardíacas!
      </h2>
      <div className="diseases-grid">
        <div className="disease-card" onClick={() => navigate('/enfermedades/arritmia')}>
          <div className="disease-icon">
            <span className="icon">❤️</span>
          </div>
          <h3>Arritmia</h3>
          <button className="disease-button">Ver más</button>
        </div>
        <div className="disease-card" onClick={() => navigate('/enfermedades/enfermedadCoronaria')}>
          <div className="disease-icon">
            <span className="icon">🫀</span>
          </div>
          <h3>Enfermedad Coronaria</h3>
          <button className="disease-button">Ver más</button>
        </div>
        <div className="disease-card" onClick={() => navigate('/enfermedades/hipertension')}>
          <div className="disease-icon">
            <span className="icon">📈</span>
          </div>
          <h3>Hipertensión Arterial</h3>
          <button className="disease-button">Ver más</button>
        </div>
        <div className="disease-card" onClick={() => navigate('/enfermedades/insuficienciaCardiaca')}>
          <div className="disease-icon">
            <span className="icon">💔</span>
          </div>
          <h3>Insuficiencia Cardíaca</h3>
          <button className="disease-button">Ver más</button>
        </div>
      </div>

      {/* Sección "¡Sumérgete en tu corazón!" con tarjetas de experiencia 3D y datos curiosos */}
      <h2 className="section-title" style={{ textAlign: 'center', margin: '60px 0 40px' }}>
        ¡Sumérgete en tu corazón!
      </h2>
      <div className="info-section">
        <div className="info-card" onClick={() => navigate('/experiencia3d')}>
          <h3>Experiencia 3D</h3>
          <p>Explora el corazón humano de manera interactiva con nuestros modelos 3D</p>
          <button className="info-button">Explorar</button>
        </div>
        <div className="info-card" onClick={() => navigate('/datos')}>
          <h3>Datos curiosos</h3>
          <p>Descubre datos fascinantes sobre el corazón que quizás no conocías</p>
          <button className="info-button">Explorar</button>
        </div>
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