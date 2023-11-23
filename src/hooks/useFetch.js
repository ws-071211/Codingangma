import { useEffect, useState } from "react"
import axios from "axios";

export default function useFetch(url){
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(data=>{
            setData(data.data);
        }).catch(error=>{
            console.log(error)
        })
    },[url]);

    return data;
}