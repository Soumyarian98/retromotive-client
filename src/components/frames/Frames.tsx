import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ImageItem } from "@/data/images";
import Frame from "./Frame";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

interface Props {
  images: ImageItem[];
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}

const GOLDENRATIO = 1.61803398875;

const Frames: React.FC<Props> = ({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) => {
  const [activeName, setActiveName] = React.useState<string | null>(null);
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<any>();

  useEffect(() => {
    if (!activeName) {
      p.set(0, 0.6, false ? 9 : 4.5);
      q.identity();
      return;
    }
    clicked.current = ref.current!.getObjectByName(activeName);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(
        p.set(0, GOLDENRATIO / 2 + 0.15, false ? 2.4 : 1.3)
      );
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0.6, false ? 9 : 4.5);
      q.identity();
    }
  }, [activeName]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  console.log("activeName", activeName);

  return (
    <group
      ref={ref}
      onClick={e => e.stopPropagation()}
      onPointerMissed={() => setActiveName(null)}>
      {images.map((props, index) => (
        <group
          key={props.url}
          onClick={e => (e.stopPropagation(), setActiveName("1234" + index))}>
          <Frame name={"1234" + index.toString()} {...props} />
        </group>
      ))}
    </group>
  );
};

export default Frames;
