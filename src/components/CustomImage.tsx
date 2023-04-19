import React, { forwardRef, useRef } from "react";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { Color, TextureLoader } from "three";
import { shaderMaterial } from "@react-three/drei";
import { useAnimationFrame } from "framer-motion";

export const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new Color(0.2, 0.0, 0.1),
    texture1: null,
    distanceFromCenter: 0,
  },
  // vertex shader
  `
    uniform float time;
    varying vec2 vUv;
    uniform float distanceFromCenter;
    
    varying vec3 vPosition;
    float PI = 3.141592653589793238;

    void main() {
      vUv = (uv-vec2(0.5))*(1.1 - 0.2 * distanceFromCenter * (2.0-distanceFromCenter)) + vec2(0.5);
      vec3 pos = position;

      pos.y += sin(PI * uv.x)*0.03;
      pos.z += sin(PI * uv.x)*0.1;

      pos.y += sin(time)*0.08;
      vUv.y += sin(time)*0.02;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // fragment shader
  `
    uniform float time;
    uniform float distanceFromCenter;
    uniform sampler2D texture1;
    uniform vec3 color;
    varying vec2 vUv;
    varying vec3 vPosition;

    float PI = 3.141592653589793238;

    void main() {
      vec4 tex = texture2D(texture1, vUv);
      gl_FragColor.rgba = tex;
      gl_FragColor.a = clamp(distanceFromCenter, 0.3, 1.0);
    }
  `
);

// declaratively
extend({ ColorShiftMaterial });

const CustomImage = forwardRef(({ position, url }: any, ref: any) => {
  const texture = useLoader(TextureLoader, url);
  const imageMaterial = useRef<any>();
  useFrame((state, delta) => (imageMaterial.current.time += delta));
  return (
    <mesh position={position} ref={ref}>
      <planeGeometry args={[2 * 1.5, 2, 20, 20]} />
      {/* @ts-ignore */}
      <colorShiftMaterial
        transparent
        ref={imageMaterial}
        time={1}
        texture1={texture}
        distanceFromCenter={0}
      />
    </mesh>
  );
});

export default CustomImage;
