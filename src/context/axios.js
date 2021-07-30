import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:5001/amzone-clone-b8f5f/us-central1/api"
});
export default instance;