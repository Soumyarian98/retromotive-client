import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import Frames from "./frames/Frames";
import { images } from "@/data/images";
import {
  Environment,
  Float,
  MeshReflectorMaterial,
  Text,
} from "@react-three/drei";
import {
  EffectComposer,
  Vignette,
  Noise,
  Bloom,
} from "@react-three/postprocessing";

const ImageGallery = () => {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      <color attach="background" args={["#24172F"]} />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} />
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleBufferGeometry args={[8, 20]} />
          <MeshReflectorMaterial
            mirror={0.5}
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={15}
            roughness={0.99}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.3}
            color="#211727"
            metalness={0.8}
          />
        </mesh>
      </group>
      <EffectComposer>
        <Vignette offset={0.5} darkness={0.7} />
        <Noise premultiply />
        <Bloom mipmapBlur intensity={0.6} luminanceThreshold={0.9} />
      </EffectComposer>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.7} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0.1, -0.3]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Text
          outlineWidth={0.05}
          outlineColor={"#DAB8A8"}
          color={"#24172F"}
          maxWidth={3}
          anchorX="center"
          anchorY="top"
          letterSpacing={0.1}
          position={[0, 3.1, 0]}
          fontSize={0.7}>
          RETROMOTIVE
        </Text>
        <Text
          maxWidth={1}
          anchorX="center"
          anchorY="top"
          textAlign="center"
          position={[0, 0.3, 1]}
          fontSize={0.1}
          depthOffset={1}>
          Click on images to view details.
        </Text>
      </Float>
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ImageGallery;
