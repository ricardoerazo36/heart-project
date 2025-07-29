/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import { OrbitControls, Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import "./Medallero.css";

const PodiumBox = ({ position, color, user }) => {
  const height = user?.percentageCompleted ? user.percentageCompleted / 25 : 1;

  return (
    <group>
      <mesh position={[position[0], height / 2 - 1.5, position[2]]}>
        <boxGeometry args={[1, height, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {user && (
        <Text
          position={[position[0], height - 1 + 0.5, position[2]]}
          fontSize={0.2}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {user.name || "Usuario"}
          {"\n"}({user.percentageCompleted}%)
        </Text>
      )}
    </group>
  );
};

PodiumBox.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    percentageCompleted: PropTypes.number,
  }),
};

const Medallero = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "quizProgress"));
      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        users.push({ id: doc.id, ...data });
      });

      const validUsers = users
        .filter(
          (u) =>
            u.percentageCompleted !== undefined &&
            !isNaN(Number(u.percentageCompleted))
        )
        .map((u) => ({
          ...u,
          percentageCompleted: Number(u.percentageCompleted),
        }))
        .sort((a, b) => b.percentageCompleted - a.percentageCompleted);

      setTopUsers(validUsers.slice(0, 3));
      setAllUsers(validUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="medallero-page">
      <div className="medallero-canvas">
        <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 10, 5]} />
          <OrbitControls enablePan={false} />
          <PodiumBox position={[-1.5, 0, 0]} color="silver" user={topUsers[1]} />
          <PodiumBox position={[0, 0, 0]} color="gold" user={topUsers[0]} />
          <PodiumBox position={[1.5, 0, 0]} color="#cd7f32" user={topUsers[2]} />
        </Canvas>
      </div>

      <div className="user-list">
        <h2>🏅 Lista de Participantes</h2>
        <ul>
          {allUsers.map((user, index) => (
            <li key={user.id}>
              <strong>{index + 1}.</strong> {user.name || "Usuario"} — {user.percentageCompleted}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Medallero;
