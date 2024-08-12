
import axios from 'axios'; 
const API_URL='https://file-sharing-app-backend-thf2.vercel.app';


export const uploadFile=async(data)=>{
    try{
     const response= await axios.post(`${API_URL}/upload`,data);
     return response.data;
    }
    catch(error){
        console.log("Error while calling the api",error.message)
    }
}
