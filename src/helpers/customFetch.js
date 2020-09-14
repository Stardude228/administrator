import { useState, useEffect } from "react"
import {url as _url} from './url'
import Axios from "axios";

export const useCustomFetch = ({
    method="GET", 
    url= _url, 
    headers={},
    data=null
})=>{
    const [_data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        Axios({
            method,
            url,
            data,
            headers
        }).then(resp =>{
            setData(resp.data);
        }).catch(error=>{
            setError(error);
        }).finally(()=>{
            setLoading(false);
        })
    },[])

    return {
        data: _data,
        loading,
        error
    }
}