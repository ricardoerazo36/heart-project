import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { auth } from "../../firebase.config";

export const saveQuizProgress = async ({ percentage, correctAnswers, totalQuestions }) => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await setDoc(doc(db, "quizProgress", user.uid), {
      name: user.displayName || "Usuario",
      percentageCompleted: percentage,
      correctAnswers,
      totalQuestions,
      timestamp: new Date(),
    });
    console.log("✅ Progreso del quiz guardado en Firestore");
  } catch (error) {
    console.error("❌ Error al guardar progreso:", error);
  }
};
