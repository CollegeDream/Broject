import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://888f-2402-800-62a7-eaa9-a814-4ea2-97ef-13db.ngrok-free.app',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;