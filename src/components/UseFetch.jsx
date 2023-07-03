import { useEffect, useState } from "react";
// import axios from "axios";

const UseFetch = (url) => {
    const [allData, setAllData] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            setAllData(data)
            // setLoading(false)
            // setError(null)
        })
    }, [url])

    return { allData };
}
 
export default UseFetch;