/* eslint-disable no-unused-vars */
import React from "react";
import "./Us.css";

// Sample data moved before component
const values = [
  {
    title: "Universidad del Valle",
    description: "Curso de ingenieria de sistemas"
  }
];

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & Founder",
    bio: "John founded the company with a vision to change the world.",
    //image: "https://via.placeholder.com/150"]
  }
];

const Us = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>Sobre nosotros</h1>
        <p className="tagline">Somos un grupo de estudiantes de la universidad del Valle,</p>
        <p>que durante el curso de proyecto integrador I, se nos ha pedido realizar una aplicacion</p>
        <p>interactiva y educativa utilizando modelos 3D, enfocandonos sobre el corazón humano.</p>
      </section>

      <section className="our-story">
        <h2>Sobre la aplicación</h2>
        <div className="story-content">
          <div className="story-text">
            <p>Esta aplicación busca educar al usuario de forma interactiva sobre el corazón, las posibles enfermedades que lo
              afectan y a como prevenirlas con varios consejos simples pero efectivos.
            </p>
            <p>Esta aplicación esta diseñada utilizando modelos 3d para que el usuario tenga una ayuda visual a la hora de
              aprender sobre las complejidades del corazón humano. </p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Sobre el contenido</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Us;