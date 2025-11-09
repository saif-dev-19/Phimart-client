import axios from "axios";


const apiClient = axios.create({
    baseURL : "https://phimart-xi.vercel.app/api",
})
export default apiClient 