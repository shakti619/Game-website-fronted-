import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8a022e0751b74a6f80e84faa7554b982",
  },
});
