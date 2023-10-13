import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import {
  MdOutlineVideoLibrary,
  MdMusicVideo,
  MdOutlineSettingsInputSvideo,
} from "react-icons/md";
import { vietnamVideo } from "../assets";

export const sideBarLinks = [
  {
    id: "",
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    id: "shorts",
    title: "Shorts",
    icon: <RiVideoLine />,
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    icon: <MdOutlineSettingsInputSvideo />,
  },
  {
    id: "papayaMusic",
    title: "Papaya Music",
    icon: <MdMusicVideo />,
  },
];

export const myChannels = [
  {
    id: "library",
    title: "Library",
    icon: <MdOutlineVideoLibrary />,
  },
  {
    id: "history",
    title: "History",
    icon: <MdOutlineVideoLibrary />,
  },
  {
    id: "yourvideos",
    title: "Your Videos",
    icon: <MdOutlineVideoLibrary />,
  },
  {
    id: "watchlater",
    title: "Watch Later",
    icon: <MdOutlineVideoLibrary />,
  },
  {
    id: "download",
    title: "Downloads",
    icon: <MdOutlineVideoLibrary />,
  },
  {
    id: "404",
    title: "404",
    icon: <MdOutlineVideoLibrary />,
  },
];

export const subscriptions = [
  {
    id: "designCode",
    title: "DesignCode",
    icon: "https://yt3.googleusercontent.com/ytc/APkrFKbj64HTyjSWyiqCrtlsBP1gReCWBYWa8hjNfDnKkQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "figma",
    title: "Figma",
    icon: "https://w7.pngwing.com/pngs/684/413/png-transparent-figma-logo-thumbnail-tech-companies.png",
  },
  {
    id: "sketch",
    title: "Sketch",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/2267px-Sketch_Logo.svg.png",
  },
  {
    id: "spline",
    title: "Spline",
    icon: "data:image/jpeg;base64,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",
  },
];

export const filters = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Gaming",
  },
  {
    id: 3,
    title: "Thoughts",
  },
  {
    id: 4,
    title: "Music",
  },
  {
    id: 5,
    title: "Thrillers",
  },
  {
    id: 6,
    title: "Mixers",
  },
  {
    id: 7,
    title: "Avatar",
  },
  {
    id: 8,
    title: "Film criticisma",
  },
  {
    id: 9,
    title: "Korean dramas",
  },
  {
    id: 10,
    title: "Characters",
  },
  {
    id: 11,
    title: "Fooder",
  },
  {
    id: 11,
    title: "Travel",
  },
];

export const fetchData = [
  {
    id: 1,
    title: "Design and Prototype an App with Play - Full 3-hour Course",
    url: vietnamVideo,
    channel: {
      id: 1,
      name: "Designcode",
    },
    view: 140000,
    createAt: "",
  },
  {
    id: 2,
    title: "Create 3D Site with Spline and React - Full Course",
    url: vietnamVideo,
    channel: {
      id: 2,
      name: "Channel name",
    },
    view: 1400000,
    createAt: "",
  },
  {
    id: 3,
    title: "How to Use AI Art Generator on Midjourney",
    url: vietnamVideo,
    channel: {
      id: 3,
      name: "midjourneyArt",
    },
    view: 140000,
    createAt: "",
  },
  {
    id: 4,
    title: "How to Use AI Art Generator on Midjourney",
    url: vietnamVideo,
    channel: {
      id: 4,
      name: "midjourneyArt",
    },
    view: 140000,
    createAt: "",
  },
  {
    id: 5,
    title: "How to Use AI Art Generator on Midjourney",
    url: vietnamVideo,
    channel: {
      id: 5,
      name: "midjourneyArt",
    },
    view: 140000,
    createAt: "",
  },
  {
    id: 6,
    title: "How to Use AI Art Generator on Midjourney",
    url: vietnamVideo,
    channel: {
      id: 6,
      name: "midjourneyArt",
    },
    view: 140000,
    createAt: "",
  },
];
