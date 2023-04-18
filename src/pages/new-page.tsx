import { Canvas, extend, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useLayoutEffect } from "react";
import { medias } from "@/data/medias";
import CustomImage, { ColorShiftMaterial } from "@/components/CustomImage";
import { gsap } from "gsap";

extend({ ColorShiftMaterial });

let attractMode = false;
let attractTo = 0;
let prevAttractTo = 0;
let speed = 0;
let position = 0;
let rounded = 0;
const ASPECT = 1.5;
const positionGap = ASPECT * 1.5;
let animation: gsap.core.Timeline | null = null;
let timer: any;
let timer2: any;
let allowAnimation = true;

const Frame = ({ viewText }: any) => {
  const groupRef = useRef<any>();
  const imageRefs = useRef<any[]>([]);

  const updateChanges = (index: number) => {
    if (!attractMode) {
      if (attractTo !== index) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          viewText(index);
          prevAttractTo = attractTo;
        }, 500);
        attractTo = index;
      }
    }
  };

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
    <group rotation={[0, -Math.PI / 10, 0]}>
      <group
        ref={groupRef}
        rotation={[-Math.PI / 8, 0, 0]}
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
    </group>
  );
};

const NewPage = () => {
  const titleContainerRef = useRef<any>();
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

  useLayoutEffect(() => {
    if (allowAnimation === true) {
      allowAnimation = false;
      animation = gsap
        .timeline({})
        .from(titleContainerRef.current.children[0], {
          opacity: 0,
          y: -100,
          display: "none",
        })
        .to(titleContainerRef.current.children[0], {
          opacity: 1,
          display: "block",
          onComplete: () => {
            allowAnimation = true;
          },
        });
    }
  }, []);

  const viewText = async (index: number) => {
    if (animation) animation.kill();
    animation = gsap
      .timeline({})
      .to(titleContainerRef.current.children[prevAttractTo], {
        opacity: 0,
        y: 100,
        display: "none",
        duration: 0.15,
      })
      .to(colorRef.current, {
        r: medias[index].bgcolor.r,
        g: medias[index].bgcolor.g,
        b: medias[index].bgcolor.b,
        duration: 0.15,
      })
      .from(
        titleContainerRef.current.children[index],
        {
          opacity: 0,
          y: -100,
          display: "none",
          duration: 0.15,
        },
        "<"
      )
      .to(titleContainerRef.current.children[index], {
        opacity: 1,
        y: 0,
        display: "block",
        duration: 0.15,
      });
  };

  return (
    <div className="relative w-screen h-screen">
      <Canvas frameloop="always" camera={{ fov: 50 }}>
        <color
          ref={colorRef}
          attach="background"
          args={[medias[0].bgcolor.r, medias[0].bgcolor.g, medias[0].bgcolor.r]}
        />
        <Frame color={colorRef.current} viewText={viewText} />
      </Canvas>
      <div className="absolute top-0 left-0 right-0 px-16 py-8 flex justify-between">
        <div className="w-[150px]">
          <img src="https://retromotive.co/wp-content/uploads/2022/03/RetroDrivingLogo.png" />
        </div>
        <ul className="flex gap-8">
          <li className="font-medium">SHOP</li>
          <li className="font-medium">ARTICLES</li>
          <li className="font-medium">ADVERTISE</li>
        </ul>
      </div>
      <div
        ref={titleContainerRef}
        className="absolute top-1/2 left-20 -translate-y-1/2">
        {medias.map(el => {
          return (
            <div key={el.id} className="max-w-[50%] hidden space-y-2">
              <h1 className="text-8xl font-extrabold text-gray-900">
                {el.title}
              </h1>
              <p className="text-gray-700">{el.subtitle}</p>
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
                prevAttractTo = attractTo;
                attractTo = index;
                viewText(index);
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
