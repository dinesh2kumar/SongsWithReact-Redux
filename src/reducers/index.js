import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Monika O My Darling", duration: "4:04" },
    { title: "Baazigaar", duration: "3:44" },
    { title: "Rockstar", duration: "4:37" },
    { title: "Koora Kaagaz", duration: "5:03" },
    { title: "Dil Kho Gaya", duration: "3:07" },
    { title: "Ab Tera Bin", duration: "5:44" },
    { title: "Aashiqui 1990", duration: "7:01" },
    { title: "O Priya Priya", duration: "6:03" },
    { title: "Aaya Hai Raaza", duration: "6:14" },
    { title: "Bam Bam BamBai", duration: "6:44" },
    { title: "Jab Koi Baat Bigad Jaye", duration: "8:00" },
    { title: "Shurmani Sham", duration: "7:03" },
    { title: "Ab Tera Bin", duration: "5:46" },
    { title: "Tu Meri Zindagi", duration: "4:44" },
    { title: "Dheera Dheera", duration: "9:37" },
    { title: "Dil Ka Alam", duration: "5:49" },  
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
