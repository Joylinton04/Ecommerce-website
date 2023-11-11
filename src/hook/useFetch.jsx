import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (url) => {
  const [data ,setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
 

    useEffect(() => {
        const fetchData = async (endpoint="") => {
            const response = await axios.get(`https://fakestoreapi.com/products/${endpoint}`)
            setIsLoading(true)
            try {
                setData(response.data)
                setFetchError(null)
            }
            catch (error){
              console.log('ERROR', error);
              setData([])
              setFetchError(error)
            }
            finally{
                setIsLoading(false)
            }
        }

        setTimeout(() => {
            fetchData(url)
        },2000)

    },[url])



  
    return {data, isLoading, fetchError}
}

export default useFetch;