import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import "./Profile.css";

const Profile = () => {
  const { userLooged, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout().then(() => navigate("/"));
  }, [logout, navigate]);

  useEffect(() => {
    if (!userLooged) {
      navigate("/login");
      return;
    }
    
    const fetchData = async () => {
      const { displayName, email } = userLooged;
      const data = { displayName, email };
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok)
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        return await response.json();
      } catch (error) {
        console.error(`Error creating user:`, error);
        throw error;
      }
    };
    fetchData();
  }, [userLooged, navigate]);

  if (!userLooged) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-large">
            {userLooged.photoURL ? (
              <img 
                src={userLooged.photoURL} 
                alt="Foto de perfil" 
                className="profile-image-large"
              />
            ) : (
              <div className="profile-placeholder-large">
                <i className="bi bi-person-fill"></i>
              </div>
            )}
          </div>
          <h2 className="profile-name">{userLooged.displayName || "Usuario"}</h2>
          <p className="profile-email">{userLooged.email}</p>
        </div>
        
        <div className="profile-info">
          <h3>Información de la cuenta</h3>
          <div className="info-item">
            <span className="info-label">Nombre:</span>
            <span className="info-value">{userLooged.displayName || "No disponible"}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{userLooged.email}</span>
          </div>
        </div>
        
        <div className="profile-actions">
          <button 
            onClick={handleLogout} 
            className="logout-button"
            title="Cerrar sesión"
          >
            <i className="bi bi-box-arrow-right"></i>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;