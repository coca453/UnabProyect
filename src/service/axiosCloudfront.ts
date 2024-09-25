import axios from "axios";

const cloudfrontApiInstance = axios.create({
  baseURL: import.meta.env.VITE_CLOUDFRONT_URL,
  validateStatus: function (status) {
    return status < 400;
  },
});

export default cloudfrontApiInstance;
