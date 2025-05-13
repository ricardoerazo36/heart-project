import { Html } from "@react-three/drei";
import "./Title.css";


const Title = ({ title }) => {
    return (
        <Html center position={[-1.2, -1.4, 0.9]} distanceFactor={5} wrapperClass="title" zIndexRange={[0, 0]}>
           <h1>{title}</h1>
        </Html>
    );
};

export default Title;