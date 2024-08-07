import happyIcon from "../assets/happy-icon.svg";
import sadIcon from "../assets/sad-icon.svg";
import angryIcon from "../assets/angry-icon.svg";
import relaxedIcon from "../assets/relaxed-icon.svg";
import excitedIcon from "../assets/excited-icon.svg";
import anxiousIcon from "../assets/anxious-icon.svg";
import romanticIcon from "../assets/romantic-icon.svg";
import focusIcon from "../assets/focus-icon.svg";
import confidentIcon from "../assets/confident-icon.svg";
import calmIcon from "../assets/calm-icon.svg";

export const moods = [
  {
    id: 0,
    mood: "Happy",
    src: happyIcon,
    alt: "happy face",
  },
  {
    id: 1,
    mood: "Sad",
    src: sadIcon,
    alt: "sad face",
  },
  {
    id: 2,
    mood: "Angry",
    src: angryIcon,
    alt: "angry face",
  },
  {
    id: 3,
    mood: "Relaxed",
    src: relaxedIcon,
    alt: "relaxed face",
  },
  {
    id: 4,
    mood: "Excited",
    src: excitedIcon,
    alt: "excited face",
  },
  {
    id: 5,
    mood: "Anxious",
    src: anxiousIcon,
    alt: "anxious face",
  },
  {
    id: 6,
    mood: "Romantic",
    src: romanticIcon,
    alt: "heart eye face",
  },
  {
    id: 7,
    mood: "Focused",
    src: focusIcon,
    alt: "brain",
  },
  {
    id: 8,
    mood: "Confident",
    src: confidentIcon,
    alt: "confident stance",
  },
  {
    id: 9,
    mood: "Calm",
    src: calmIcon,
    alt: "meditation icon",
  },
];

export const moodGenres = {
  happy: ["pop", "happy", "country", "disco"],
  sad: ["sad", "blues", "singer-songwriter"],
  angry: ["metal", "rock", "punk"],
  relaxed: ["chill", "jazz", "folk", "singer-songwriter"],
  excited: ["dance", "funk", "latin", "party", "house"],
  anxious: ["ambient", "chill"],
  romantic: ["romance", "soul", "r-n-b", "salsa"],
  focused: ["acoustic", "study", "classical"],
  confident: ["dance", "hip-hop", "afrobeat", "pop"],
  calm: ["new-age", "sleep", "classical"],
};
