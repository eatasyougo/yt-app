import axios from "axios";
const KEY = "AIzaSyBSuMJyjLsEUw2l1UBNhOGyaZLdaeV5nFM";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxresults: 5,
    key: KEY,
  },
});
