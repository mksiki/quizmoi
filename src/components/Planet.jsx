import { Suspense } from "react";
import "../App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mundo from "../../public/Mundo";

function Planet() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Mundo></Mundo>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Planet;
