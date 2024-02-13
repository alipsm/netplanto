import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
// import config from './config.json'

const BASE_URL="http://193.36.84.113:8000"

const token=localStorage.getItem("token");

// debugger

if (token!=="undefined"&&token!=null&&token) {
    // axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
    axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
}


axios.interceptors.response.use(null,error=>{
    const expectedError=error.response&&error.response.status>=400&&error.response.status<500;
    if(!expectedError){
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true
        });
    }
    return Promise.reject(error);
})

// // eslint-disable-next-line import/no-anonymous-default-export
// export default{
//     get:axios.get,
//     post:axios.post,
//     put:axios.put,
//     delete:axios.delete
// }


export default function useApi() {
  useEffect(() => {
  }, [])
  
  const token = localStorage.getItem("token");
  if (token !== "undefined" && token != null && token) {
    axios.defaults.headers.common["Authorization"] = `${token}`
  }
  axios.defaults.headers.common["Content-Type"] = "application/json"
  async function post(path,body) {

    try {
      const data = await axios
        .post(BASE_URL+path, body)
        .catch((e) => {
          // debugger
          const data=e.response.data
          let message="";
          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
               message += data[key];
            }
          }
          // message+=(<><br/> hi</>)
          throw new Error(message);
        });
      if (data.status == 200||data.status==201||data.status==204) {
        return data.data;
      }
      throw new Error("Please try again status code:" + data.status);
    } catch (error) {
      // debugger
      console.log('error', error)
      throw Error(error.message);
    }
  }
  return { post };
}