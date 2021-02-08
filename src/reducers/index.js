import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Monika O My Darling", duration: "4:04" },
    { title: "Baazigaar", duration: "3:44" },
    { title: "Rockstar", duration: "4:37" },
    { title: "Koora Kaagaz", duration: "5:03" },
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
