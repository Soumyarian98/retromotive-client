export interface ImageItem {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  item: string;
}

// (5, 0) - 0.5π radians
// (4.755, 0, 3.455) - 0.398π radians
// (3.090, 0, 4.755) - 0.25π radians
// (0, 0, 5) - 0 radians
// (-3.090, 0, 4.755) - -0.25π radians
// (-4.755, 0, 3.455) - -0.398π radians
// (-5, 0, 0) - -0.5π radians
// (-4.755, 0, -3.455) - -0.602π radians
// (-3.090, 0, -4.755) - -0.75π radians
// (0, 0, -5) - -π radians

const imageLink1 =
  "https://images.unsplash.com/photo-1588899451796-9ee681bf3da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";
const imageLink2 =
  "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
const imageLink3 =
  "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
const imageLink4 =
  "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3RyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

export const images: ImageItem[] = [
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: imageLink1,
    item: "Mustang",
  },
  {
    position: [-1.5, 0, 0.25],
    rotation: [0, Math.PI / 6, 0],
    url: imageLink2,

    item: "Porsche",
  },
  // Right
  {
    position: [1.5, 0, 0.25],
    rotation: [0, -Math.PI / 6, 0],

    item: "Lamborghini",
    url: imageLink3,
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: imageLink4,

    item: "GTR",
  },
];
