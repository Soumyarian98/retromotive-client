import { Image } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const getRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

let speed = 0;
let position = 0;
let rounded = 0;
const objDistances = new Array(5).fill({ distance: 0 });

const Frame = () => {
  const imageRefs = useRef<any[]>([]);

  useFrame(() => {
    position += speed;
    speed *= 0.9;

    rounded = Math.round(position);

    let diff = rounded - position;

    position += diff * 0.1;

    if (imageRefs.current && imageRefs.current.length > 0) {
      imageRefs.current.forEach((ref, i) => {
        // @ts-ignore
        imageRefs.current[i].position.y = -position * 1.66 + i * 1.66;
      });
    }
  });

  return (
    <group rotation={[0, -Math.PI * 0.1, -Math.PI * 0.04]}>
      {new Array(5).fill(0).map((el, i) => {
        return (
          <Image
            ref={ref => (imageRefs.current[i] = ref)}
            key={getRandomId()}
            url="/banner.jpg"
            scale={[3, 1.33]}
            position={[0, 1.66 * i, 0]}
          />
        );
      })}
    </group>
  );
};

export default function Home() {
  useEffect(() => {
    const handleWheele = (e: WheelEvent) => {
      speed += e.deltaY * 0.0003;
    };
    window.addEventListener("wheel", handleWheele);
    return () => {
      window.removeEventListener("wheel", handleWheele);
    };
  }, []);
  return (
    <>
      <div
        id="block"
        className="absolute left-[100px] w-[100px] h-[100px] bg-red-500"></div>
      <div id="wrap">
        <div
          id="indicator"
          className={`absolute top-[100px] w-[100px] h-[10px] bg-blue-500 left-0`}></div>
        <div
          id="indicator"
          className={`absolute top-[200px] w-[100px] h-[10px] bg-blue-500 left-0 `}></div>
        <div
          id="indicator"
          className={`absolute top-[300px] w-[100px] h-[10px] bg-blue-500 left-0 `}></div>
        <div
          id="indicator"
          className={`absolute top-[400px] w-[100px] h-[10px] bg-blue-500 left-0 `}></div>
        <div
          id="indicator"
          className={`absolute top-[500px] w-[100px] h-[10px] bg-blue-500 left-0 `}></div>
      </div>
      <div className="fixed inset-0 left-0 z-0">
        <Canvas frameloop="always">
          <Frame />
        </Canvas>
      </div>
    </>
  );
}

// useEffect(() => {
//   const block = document.getElementById("block")!;
//   const wrap = document.getElementById("wrap")!;
//   const indicators = document.querySelectorAll("#indicator")!;
//   const handleWheele = (e: WheelEvent) => {
//     speed += e.deltaY * 0.0003;
//   };
//   window.addEventListener("wheel", handleWheele);

//   // const raf = () => {
//   //   position += speed;
//   //   speed *= 0.9;

//   //   objDistances.forEach((obj, i) => {
//   //     obj.distance = 1 - Math.min(Math.abs(position - i), 1);
//   //     // @ts-ignore
//   //     indicators[i].style.transform = `scaleX(${1 + obj.distance})`;
//   //   });

//   //   rounded = Math.round(position);

//   //   let diff = rounded - position;

//   //   position += diff * 0.1;

//   //   // block.style.transform = `translateY(${position * 100 + 50}px)`;
//   //   wrap.style.transform = `translateY(${-position * 100 + 50}px)`;
//   //   if (imageRefs.current && imageRefs.current.length > 0) {
//   //     imageRefs.current.forEach((ref, i) => {
//   //       // @ts-ignore
//   //       imageRefs.current[i].position.y = position * 1.66 + i;
//   //       // @ts-ignore
//   //       imageRefs.current[i].scale.y = 1.33 + objDistances[i].distance * 0.33;
//   //     });
//   //   }
//   //   window.requestAnimationFrame(raf);
//   // };
//   // raf();

//   return () => {
//     window.removeEventListener("wheel", handleWheele);
//   };
// }, []);
