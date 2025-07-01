import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import "./Login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { loginGoogleWithPopUp, userLooged } = useAuthStore();
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    if (userLooged) {
      navigate("/");
    }
  }, [userLooged, navigate]);

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    
    try {
      await loginGoogleWithPopUp();
      // No need to navigate here as the useEffect will handle redirection
    } catch (err) {
      console.error("Google login error:", err);
      setError("Error al iniciar sesión con Google. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img 
            src="/imagenes/Logo.jpg" 
            alt="Heart Care Logo" 
            className="login-logo"
          />
          <h1>Iniciar Sesión</h1>
          <p className="login-subtitle">
            Accede a tu cuenta para continuar
          </p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="login-options">
          <button 
            className="google-button"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <img 
              src="/imagenes/google-icon.png" 
              alt="Google" 
              className="google-icon"
            />
            {loading ? "Procesando..." : "Continuar con Google"}
          </button>
        </div>

        <div className="login-info">
          <p>
            Al iniciar sesión, podrás acceder a todas las funcionalidades 
            de Heart Care y guardar tu progreso en el quiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;