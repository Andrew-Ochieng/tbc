import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function getData() {
        try {
            const res = await axios.get(url)
            // const result = res.data
            // console.log(res)
            setAllData(res)
            setLoading(true)
            setError(null)
        } catch (error) {
            // console.log(error)
            setError(error.message)
            setLoading(false)
        }
    }


    useEffect(() => {
        getData()
    }, [url])

    return ( { allData, error, loading } );
}
 
export default useFetch;