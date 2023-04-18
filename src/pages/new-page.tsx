import { useActiveStep } from "@/hooks/useActiveStep";
import { motion, motionValue, useAnimate, animate } from "framer-motion";
import { Html, shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { medias } from "@/data/medias";
import CustomImage, { ColorShiftMaterial } from "@/components/CustomImage";
import { gsap } from "gsap";

extend({ ColorShiftMaterial });

let attractMode = false;
let attractTo = 0;
let speed = 0;
let position = 0;
let rounded = 0;
const ASPECT = 1.5;
const positionGap = ASPECT * 1.5;
let hovering = false;
let timeOut = null;

const Frame = ({ color, viewText }: any) => {
  const groupRef = useRef<any>();
  const imageRefs = useRef<any[]>([]);

  const updateChanges = (index: number) => {
    color?.set(medias[index].bgcolor);
    if (!attractMode) {
      if (attractTo !== index) {
        viewText(index);
        attractTo = index;
      }
    }
  };

  useLayoutEffect(() => {
    gsap
      .timeline()
      .fromTo(
        groupRef.current.position,
        { y: -positionGap * 5 },
        { y: 0, duration: 1 }
      )
      .to(groupRef.current.position, { y: 0, duration: 1 });
  }, []);

  useFrame(() => {
    position += speed;
    speed *= 0.9;
    rounded = Math.round(position);
    switch (rounded) {
      case 0:
        updateChanges(0);
        break;
      case 1:
        updateChanges(1);
        break;
      case 2:
        updateChanges(2);
        break;
      case 3:
        updateChanges(3);
        break;
      case 4:
        updateChanges(4);
        break;
    }

    let diff = rounded - position;

    if (attractMode) {
      gsap.to(groupRef.current.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(groupRef.current.rotation, {
        x: 0,
        y: -Math.PI * 0.12,
        z: -Math.PI * 0.05,
        duration: 0.5,
        // onComplete: () => {
        //   onComplete();
        // },
      });
    }

    if (attractMode) {
      position += (attractTo - position) * 0.09;
    } else {
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015;
    }

    if (imageRefs.current && imageRefs.current.length > 0) {
      imageRefs.current.forEach((ref, i) => {
        // console.log(position, i);
        let dist = Math.min(Math.abs(position - i), 1);
        dist = 1 - Math.pow(dist, 2);
        let scale = 1 + 0.1 * dist;
        // @ts-ignore
        imageRefs.current[i].position.y =
          -position * positionGap + i * positionGap;
        imageRefs.current[i].scale.set(scale, scale, scale);

        imageRefs.current[i].material.uniforms.distanceFromCenter.value = dist;
      });
    }
    if (position < 0) position = 0;
    if (position > 4) position = 4;
  });

  return (
    <group
      ref={groupRef}
      rotation={[0, -Math.PI * 0.12, -Math.PI * 0.05]}
      position={[1, 0, 0]}>
      {medias.map((el, i) => {
        return (
          <Suspense key={el.id} fallback={null}>
            <CustomImage
              ref={ref => (imageRefs.current[i] = ref)}
              position={[0, positionGap * i, 0]}
              url={el.imageUrl}
            />
          </Suspense>
        );
      })}
    </group>
  );
};

const NewPage = () => {
  const titleContaunerRef = useRef<any>();
  const colorRef = useRef<any>();
  useEffect(() => {
    const handleWheele = (e: WheelEvent) => {
      speed += e.deltaY * 0.0003;
    };
    window.addEventListener("wheel", handleWheele);
    return () => {
      window.removeEventListener("wheel", handleWheele);
    };
  }, []);

  const viewText = (index: number) => {
    gsap
      .timeline()
      .to(titleContaunerRef.current.children[attractTo], {
        opacity: 0,
        y: 50,
        display: "none",
      })
      .from(titleContaunerRef.current.children[index], {
        opacity: 0,
        y: -100,
        display: "none",
      })
      .to(titleContaunerRef.current.children[index], {
        opacity: 1,
        display: "block",
      });
  };

  return (
    <div className="relative w-screen h-screen">
      <Canvas frameloop="always" camera={{ fov: 40 }}>
        <color ref={colorRef} attach="background" args={[medias[0].bgcolor]} />
        <Frame color={colorRef.current} viewText={viewText} />
      </Canvas>
      <div
        ref={titleContaunerRef}
        className="absolute top-1/2 left-20 -translate-y-1/2">
        {medias.map(el => {
          return (
            <div key={el.id} className="max-w-[50%] hidden space-y-2">
              <h1 className="text-6xl font-extrabold text-gray-50">
                {el.title}
              </h1>
              <p className="text-gray-100">{el.subtitle}</p>
            </div>
          );
        })}
      </div>
      <ul
        onMouseEnter={() => (attractMode = true)}
        onMouseLeave={() => (attractMode = false)}
        className="fixed right-20 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-4">
        {medias.map((m, index) => {
          return (
            <li
              key={m.id}
              className="w-12 h-12 text-xl font-extrabold bg-gray-900 rounded-full text-white flex justify-center items-center aspect-square"
              onMouseOver={() => {
                timeOut = setTimeout(() => {
                  viewText(index);
                  attractTo = index;
                }, 500);
              }}>
              {index}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewPage;
