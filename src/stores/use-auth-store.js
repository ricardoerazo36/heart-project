import { create } from "zustand";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => {
  return {
    userLooged: auth.currentUser, // Inicializa con el usuario actual (si hay uno)

    loginGoogleWithPopUp: async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        set({ userLooged: result.user });
        return result;
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },

    logout: async () => {
      try {
        await signOut(auth);
        set({ userLooged: null });
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
  };
});

onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ userLooged: user });
});

export default useAuthStore;
