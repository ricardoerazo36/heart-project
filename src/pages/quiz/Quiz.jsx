import { useState, useEffect } from "react";
import quizQuestions from "../../data/quizQuestions";
import useQuizStore from "../../stores/use-quiz-store";
import useAuthStore from "../../stores/use-auth-store";
import { saveQuizProgress } from "../../stores/quiz-service";
import { useNavigate, useLocation } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { incrementQuizProgress, resetQuizProgress, clearQuiz } =
    useQuizStore();
  const { userLooged } = useAuthStore();
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    if (!userLooged) {
      setShowLoginMessage(true);
    } else {
      setShowLoginMessage(false);
    }
  }, [userLooged]);

  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setCorrectAnswerIndex(currentQuestion.correctAnswer);
      setShowFeedback(true);

      if (index === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    incrementQuizProgress();
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCorrectAnswerIndex(null);

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      handleSaveProgress();
    }
  };

  const handleSaveProgress = () => {
    if (userLooged) {
      const totalQuestions = quizQuestions.length;
      const percentage = Math.round((score / totalQuestions) * 100);
      const quizData = {
        correctAnswers: score,
        totalQuestions,
        percentage,
      };

      saveQuizProgress(quizData);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    resetQuizProgress();
    clearQuiz();
  };

  if (showLoginMessage) {
    return (
      <div className="quiz-login-message">
        <h2>⚠️ Acceso restringido</h2>
        <p>
          Debes iniciar sesión con tu cuenta de Google para realizar el quiz.
        </p>
        <button className="login-button" onClick={handleLoginRedirect}>
          Iniciar sesión
        </button>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <div className="quiz-results">
        <h2>✅ Quiz Finalizado</h2>
        <p>
          Preguntas correctas: {score} / {quizQuestions.length}
        </p>
        <p>Calificación final: {percentage}%</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={handleRestart}>Reintentar</button>
          <button onClick={() => navigate("/medallero")}>Ver medallero</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>
        Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
      </h2>
      <p>{currentQuestion.question}</p>
      <ul className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`
              ${
                selectedAnswer !== null && index === selectedAnswer
                  ? "selected"
                  : ""
              }
              ${
                showFeedback && index === currentQuestion.correctAnswer
                  ? "correct"
                  : ""
              }
              ${
                showFeedback &&
                selectedAnswer === index &&
                index !== currentQuestion.correctAnswer
                  ? "incorrect"
                  : ""
              }
            `}
          >
            {option}
          </li>
        ))}
      </ul>

      {showFeedback && (
        <div className="quiz-feedback">
          {selectedAnswer === correctAnswerIndex ? (
            <p className="correct-text">✅ ¡Correcto!</p>
          ) : (
            <p className="incorrect-text">
              ❌ Incorrecto. La respuesta correcta es:{" "}
              <strong>{currentQuestion.options[correctAnswerIndex]}</strong>
            </p>
          )}
          <button onClick={handleNext}>
            {currentQuestionIndex + 1 === quizQuestions.length
              ? "Finalizar"
              : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
