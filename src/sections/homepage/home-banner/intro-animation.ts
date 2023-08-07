import { gsap } from "gsap";

const tl = gsap.timeline();

export const introAnimation = (completeAnimFunc: any) => {
  tl.from(".line span", {
    duration: 1.8,
    y: 100,
    ease: "Power4.out",
    skewY: 7,
    stagger: 0.3,
  })
    .to(".overlay-top", {
      duration: 1.6,
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottom", {
      duration: 1.6,
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: 0.4,
    })
    .to(".intro-overlay", { duration: 0, css: { display: "none" } })
    .from(".case-image img", {
      duration: 1.6,
      scale: 1.4,
      ease: "expo.inOut",
      stagger: 0.4,
      delay: -2.2,
      onComplete: completeAnimFunc,
    });
};
