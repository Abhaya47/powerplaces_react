import useFetch from "../hooks/usefetch"
import {useState} from "react";

export default function  Blog (){

    const [data,setData] = useState(null);
    
    const pata=useFetch("http://127.0.0.1:8000/blogpost/blogs/", 'GET')
    if(pata!=null){
        pata.then((data)=>{setData(data)});
            return(
        <>
            {data && data.map((item)=>{
                return <div key={item.id}>{item.description}</div>
            })}
        </>
    );
    } 
    return(
        <>
            Loading
        </>
    );

}