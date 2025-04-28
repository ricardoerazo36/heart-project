import React from 'react';
import './InsuficienciaCardiaca.css';

const InsuficienciaCardiaca = () => {
  return (
    <div className="insuficiencia-container">
      <div className="header-section">
        <h1>Insuficiencia Cardíaca</h1>
      </div>
      
      <section className="que-es-section">
        <div className="section-title">
          <h2>¿Qué es?</h2>
        </div>
        <div className="section-content">
          <div className="description">
            <p>Afección crónica que provoca que el corazón no bombee sangre con la eficacia necesaria.</p>
            <p>La insuficiencia cardíaca puede producirse cuando el corazón no bombea (sístole) o no se llena (diástole) correctamente.</p>
          </div>
          <div className="comparison-container">
            <div className="comparison-item">
              <div className="heart-placeholder normal"></div>
              <span className="comparison-label">Corazón sano</span>
            </div>
            <div className="comparison-item">
              <div className="heart-placeholder diseased"></div>
              <span className="comparison-label">Insuficiencia cardíaca</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="como-afecta-section">
        <div className="section-title">
          <h2>¿Cómo afecta?</h2>
        </div>
        <div className="section-content afecta-content">
          <div className="symptoms-list">
            <p>Los síntomas incluyen dificultad para respirar, fatiga, hinchazón en las piernas y ritmo cardíaco acelerado.</p>
            
            <div className="circulatory-placeholder"></div>
            
            <div className="additional-symptoms">
              <p>También comunes: aumento de peso, micción excesiva por la noche, palpitaciones, piernas hinchadas o pies hinchados</p>
            </div>
          </div>
          
          <div className="detailed-symptoms">
            <div className="heart-symptom-placeholder"></div>
            <div className="symptoms-detail">
              <p>Las personas pueden sufrir:</p>
              <ul>
                <li>Áreas de dolor: pecho</li>
                <li>Tos con flema escasa</li>
                <li>Falta de energía: fatiga, incapacidad para realizar tareas o ejercicio intenso o pérdida de apetito</li>
                <li>Respiratorios: dificultad para respirar al acostarse, dificultad para respirar al realizar ejercicio, dificultad para respirar por la noche o respiración rápida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="prevencion-section">
        <div className="section-title">
          <h2>¿Cómo prevenirlo?</h2>
        </div>
        <div className="section-content">
          <div className="prevention-text">
            <p>Una forma de prevenir la Insuficiencia Cardíaca es tratar y controlar las afecciones que pueden causarla. Entre estas afecciones se incluyen la enfermedad de las arterias coronarias, la presión arterial alta, la diabetes y la obesidad.</p>
            <ul>
              <li>No fumes</li>
              <li>Haz mucho ejercicio</li>
              <li>Come alimentos saludables</li>
              <li>Mantén un peso saludable</li>
              <li>Reduce y controla el estrés</li>
              <li>Toma los medicamentos según lo indicado</li>
            </ul>
          </div>
          <div className="heart-diagram-placeholder"></div>
        </div>
      </section>
    </div>
  );
};

export default InsuficienciaCardiaca;