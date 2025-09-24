import CardThings from "../components/Layout/CardGrid";
import useFetch from "../hooks/usefetch"
import {useState} from "react";

export default function  Places (){

    const [data,setData] = useState(null);
    
    const pata=useFetch("http://127.0.0.1:8000/blogpost/places/", 'GET')
    if(pata!=null){
        pata.then((data)=>{setData(data)});
            return(
        <>
            {data!=null?<CardThings visibleStuff={data}/>:<div className="text-6xl text-white">LOADING</div>}
            {/* {data && data.map((item)=>{
                return <div key={item.id}>{item.description}</div>
            })} */}
        </>
    );
    } 
    return(
        <>
            Loading
        </>
    );

}