import axios from "axios"


const instance = axios.create({
    baseURL: "https://track-your-work-out.web.app/", 
})

export default instance