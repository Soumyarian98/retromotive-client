import { ImageItem } from "@/data/images";
import React, { FC, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Image, Html, useCursor } from "@react-three/drei";
import { easing } from "maath";
interface Props extends ImageItem {
  c?: THREE.Color;
  name: string;
}

const Frame: FC<Props> = ({ url, c = new THREE.Color(), name, ...props }) => {
  const frame = useRef<any>(null);
  const image = useRef<any>(null);

  const [hover, setHover] = useState(false);
  const [rnd] = useState(() => Math.random());

  const isActive = true;
  useCursor(hover);
  useFrame((state, dt) => {
    image.current.material.zoom =
      0.9 - Math.sin(rnd * 10000 + state.clock.elapsedTime / 8) / 10.5;
    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && hover ? 0.85 : 1),
        0.9 * (!isActive && hover ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hover ? "yellow" : "white",
      0.1,
      dt
    );
  });

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={e => (e.stopPropagation(), setHover(true))}
        onPointerOut={() => setHover(false)}
        scale={[1.5, 1.8, 0.15]}
        position={[0, 0.95, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={url}
        />
        <Html
          scale={0.17}
          rotation={[0, 0, 0]}
          position={[0, 0.4, 0]}
          transform>
          <div className="annotation">
            <span className="text-[1.5em]">{props.item}</span>
          </div>
        </Html>
        <Html
          scale={0.17}
          rotation={[0, 0, 0]}
          position={[0, -0.4, 0]}
          transform>
          <button className="bg-black uppercase tracking-wider px-2 py-1 rounded text-[5px]">
            View Details
          </button>
        </Html>
      </mesh>
    </group>
  );
};

export default Frame;
