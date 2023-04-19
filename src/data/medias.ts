import { nanoid } from "nanoid";

const getParsedNumber = (n: number) => {
  return Number((n / 255).toFixed(2));
};

export const medias = [
  {
    id: nanoid(),
    imageUrl: "/car1.jpg",
    bgcolor: {
      r: getParsedNumber(182),
      g: getParsedNumber(8),
      b: getParsedNumber(10),
    },
    title: "Volume 17",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae consectetur enim, ab vitae doloribus sequi porro cumque blanditiis dignissimos!",
    isTextVisible: false,
  },
  {
    id: nanoid(),
    imageUrl: "/car2.jpg",
    bgcolor: {
      r: getParsedNumber(151),
      g: getParsedNumber(210),
      b: getParsedNumber(243),
    },
    title: "Volume 16",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae consectetur enim, ab vitae doloribus sequi porro cumque blanditiis dignissimos!",
    isTextVisible: false,
  },
  {
    id: nanoid(),
    imageUrl: "/car3.jpg",
    bgcolor: {
      r: getParsedNumber(215),
      g: getParsedNumber(165),
      b: getParsedNumber(41),
    },
    title: "Volume 15",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae consectetur enim, ab vitae doloribus sequi porro cumque blanditiis dignissimos!",
    isTextVisible: false,
  },
  {
    id: nanoid(),
    imageUrl: "/car4.jpg",
    bgcolor: {
      r: getParsedNumber(163),
      g: getParsedNumber(176),
      b: getParsedNumber(184),
    },
    title: "Volume 14",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae consectetur enim, ab vitae doloribus sequi porro cumque blanditiis dignissimos!",
    isTextVisible: false,
  },
  {
    id: nanoid(),
    imageUrl: "/car5.jpg",
    bgcolor: {
      r: getParsedNumber(227),
      g: getParsedNumber(82),
      b: getParsedNumber(5),
    },
    title: "Volume 13",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quae consectetur enim, ab vitae doloribus sequi porro cumque blanditiis dignissimos!",
    isTextVisible: false,
  },
];
