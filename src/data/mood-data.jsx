import happyIcon from "../assets/happy-icon.svg";
import sadIcon from "../assets/sad-icon.svg";
import angryIcon from "../assets/angry-icon.svg";
import relaxedIcon from "../assets/relaxed-icon.svg";
import anxiousIcon from "../assets/anxious-icon.svg";

export const moods = [
  {
    id: 0,
    mood: "happy",
    src: happyIcon,
    alt: "happy face",
  },
  {
    id: 1,
    mood: "sad",
    src: sadIcon,
    alt: "sad face",
  },
  {
    id: 2,
    mood: "angry",
    src: angryIcon,
    alt: "angry face",
  },
  {
    id: 3,
    mood: "relaxed",
    src: relaxedIcon,
    alt: "relaxed face",
  },
  {
    id: 4,
    mood: "anxious",
    src: anxiousIcon,
    alt: "anxious face",
  },
  
];

export const moodGenres = {
  happy: "pop",
  sad: "blues",
  angry: "metal",
  relaxed: "classical",
  anxious: "ambient",
};
