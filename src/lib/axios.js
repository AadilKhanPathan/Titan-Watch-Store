import axios from "axios";

export const api = axios.create({
    baseURL: "https://e-commerce-backend-4l6u.onrender.com/api"
});