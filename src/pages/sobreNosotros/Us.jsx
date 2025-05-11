/* eslint-disable no-unused-vars */
import React from "react";
import "./Us.css";

// Sample data for the team and values
const values = [
  {
    title: "Educación Interactiva",
    description: "Aprendizaje dinámico mediante modelos 3D y contenido interactivo."
  },
  {
    title: "Conocimiento Accesible",
    description: "Información científica presentada de manera comprensible para todos."
  },
  {
    title: "Prevención y Salud",
    description: "Enfoque en la prevención de enfermedades y hábitos saludables."
  }
];

const teamMembers = [
  {
    id: 1,
    name: "Ricardo Erazo",
  },
  {
    id: 2,
    name: "Camilo Garcés",
  },
  {
    id: 3,
    name: "Sergio Sánchez",

  },
  {
    id: 4,
    name: "David Urrego",
  }
];

const Us = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p className="tagline">
            Somos un grupo de estudiantes de la Universidad del Valle que, durante el curso de 
            Proyecto Integrador I, desarrollamos una aplicación interactiva y educativa utilizando 
            modelos 3D enfocados en el corazón humano.
          </p>
        </div>
      </section>

      <section className="our-story">
        <h2>Nuestra Aplicación</h2>
        <div className="story-content">
          <div className="story-text">
            <p>
              Esta aplicación busca educar de forma interactiva sobre el corazón humano, 
              las posibles enfermedades que lo afectan y cómo prevenirlas con consejos 
              simples pero efectivos.
            </p>
            <p>
              Utilizamos modelos 3D para proporcionar una ayuda visual que facilite la 
              comprensión de las complejidades del corazón humano, haciendo el aprendizaje 
              más accesible e intuitivo.
            </p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-placeholder"></div>
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="university-section">
        <h2>Universidad del Valle</h2>
        <p>
          Proyecto desarrollado en el marco del curso de Ingeniería de Sistemas,
          Proyecto Integrador I, Universidad del Valle.
        </p>
      </section>
    </div>
  );
};

export default Us;