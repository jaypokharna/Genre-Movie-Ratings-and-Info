/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import toast from "react-hot-toast";

const baseURL = "https://api.themoviedb.org/3"

const api_token = import.meta.env.VITE_APP_API_TOKEN

const headers = {
    Authorization : "bearer "+api_token
};

export const fetchData = async (url,params)=>{

    // console.log(url)

try {
        const {data} = await axios.get(
            baseURL + url ,{
                headers,
                params
            })
            return data;
} catch (error) {
    console.log(error)
    toast.error(error)
    return error;
}

}