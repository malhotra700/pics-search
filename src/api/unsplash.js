import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID yl4R5APiu1JAEfPUlGfbM1jlDhfjzN2-W_Cxs62zyEs",
  },
});
