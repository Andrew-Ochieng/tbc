import { useEffect, useState } from "react";
import axios from "axios";

export const UseFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                // const posts = res.data
                console.log(res)
                setData(res.data)
                setIsLoading(false)
                setError(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
                setError(true)
            })
    }, [url])
    
    return ({ data, isLoading, error });
}
 

 
