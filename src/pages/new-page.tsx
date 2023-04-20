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
const positionGap = ASPECT * 1.7;
let animation: gsap.core.Timeline | null = null;

const Frame = ({ viewText }: any) => {
  const groupRef = useRef<any>();
  const imageRefs = useRef<any[]>([]);

  const updateChanges = (index: number) => {
    if (!attractMode) {
      if (attractTo !== index) {
        // clearTimeout(timer);
        // timer = setTimeout(() => {
        //   viewText(index);
        //   prevAttractTo = attractTo;
        // }, 500);
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
        if (rounded === i && medias[i].isTextVisible === false) {
          viewText(i);
        }

        // console.log(position, i);
        let dist = Math.min(Math.abs(position - i), 1);
        dist = 1 - Math.pow(dist, 2);
        let scale = 1 + 0.4 * dist;
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
    <group ref={groupRef} rotation={[-Math.PI / 10, 0, 0]} position={[0, 0, 0]}>
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
  const titleContainerRef = useRef<any>();
  const numberContainerRef = useRef<any>();
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

  const viewText = async (index: number) => {
    // if (allowAnimation === false) return;
    if (animation) {
      animation.seek(0);
      animation.clear();
    }
    const prevAttractTo = medias.findIndex(el => el.isTextVisible === true)!;
    medias.forEach((el, i) => {
      if (i !== index) {
        el.isTextVisible = false;
      } else {
        el.isTextVisible = true;
      }
    });

    colorRef.current.r = medias[index].bgcolor.r;
    colorRef.current.g = medias[index].bgcolor.g;
    colorRef.current.b = medias[index].bgcolor.b;

    animation = gsap
      .timeline({})
      .to(titleContainerRef.current.children[prevAttractTo], {
        opacity: 0,
        display: "none",
      })
      .to(
        numberContainerRef.current.children[index],
        {
          color: "#000",
          background: "#fff",
        },
        "<"
      )
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
          <li className="text-sm uppercase font-semibold tracking-wider text-white">
            Home
          </li>
          <li className="text-sm uppercase font-semibold tracking-wider text-white">
            MERCHANDISE
          </li>
          <li className="text-sm uppercase font-semibold tracking-wider text-white">
            Subscription
          </li>
          <li className="text-sm uppercase font-semibold tracking-wider text-white">
            About Us
          </li>
        </ul>
      </div>
      <div
        ref={titleContainerRef}
        className="absolute top-1/2 left-16 -translate-y-1/2">
        {medias.map(el => {
          return (
            <div key={el.id} className="hidden space-y-6 w-[300px]">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold text-white">
                  {el.title}
                </h1>
                <p className="text-gray-50 text-sm">{el.subtitle}</p>
              </div>
              <button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                OPEN ARTICLE
              </button>
            </div>
          );
        })}
      </div>
      <ul
        onMouseEnter={() => (attractMode = true)}
        onMouseLeave={() => (attractMode = false)}
        ref={numberContainerRef}
        className="fixed right-20 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-8">
        {medias.map((m, index) => {
          return (
            <li key={m.id} className="flex gap-4 items-center p-2 rounded-md">
              <span className="uppercase font-semibold">{m.title}</span>
              <span
                onMouseOver={() => {
                  prevAttractTo = attractTo;
                  attractTo = index;
                }}
                className="w-10 h-10 text-xl font-extrabold bg-black rounded-full text-white flex justify-center items-center aspect-square">
                {index + 1}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewPage;
