import {useState, useEffect} from "react";

const useFetch=(url,method)=>{
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData=fetch(url, {method:method})
            .then((response)=>{return response.json()})
            .catch(err=>console.error(err));
            setData(fetchData);
        },[url,method]);
    
        return data;

}

export default useFetch;