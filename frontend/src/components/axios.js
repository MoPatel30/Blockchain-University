import axios from "axios"


const instance = axios.create({
    baseURL: "http://track-your-work-out.web.app/", 
})

export default instance