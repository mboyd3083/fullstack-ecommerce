import {
  cameraImage,
  computerImage,
  videoGameImage,
  audioImage,
  phoneImage,
} from "./images/category";
import {
  appleLogo,
  psLogo,
  xboxLogo,
  hpLogo,
  cannonLogo,
  logitechLogo,
} from "./images/brand";

const categories = [
  {
    title: "Computers & Laptops",
    image: computerImage,
  },
  {
    title: "Phones & Tablets",
    image: phoneImage,
  },
  {
    title: "Audio",
    image: audioImage,
  },
  {
    title: "Video Games & Consoles",
    image: videoGameImage,
  },
  {
    title: "Cameras",
    image: cameraImage,
  },
];

const brands = [
  {
    title: "Apple",
    image: appleLogo,
  },
  {
    title: "Playstation",
    image: psLogo,
  },
  {
    title: "Xbox",
    image: xboxLogo,
  },
  {
    title: "HP",
    image: hpLogo,
  },
  {
    title: "Canon",
    image: cannonLogo,
  },
  {
    title: "Logitech",
    image: logitechLogo,
  },
];

export { categories, brands };
