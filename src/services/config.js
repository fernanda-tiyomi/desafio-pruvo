import axios from "axios"

export const http = axios.create({
    baseURL: 'https://api.nasa.gov/neo/rest/v1/'
})