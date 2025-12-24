
import {useState , useEffect } from "react";


function Clock(){

    const [ time , setTime] = useState(new Date().toLocaleTimeString());
    const [ show , setShow ] = useState( true);

    useEffect(()=>{
        if( !show ) return;

        const intervalID = setInterval( ()=>{
        setTime( new Date().toLocaleTimeString());
        console.log("hello");
        } , 1000);

        return () =>{
            clearInterval(intervalID);
        }
    } , [show]);
    


    return (
        <div>
            <button onClick={()=> setShow(!show)}>{ show?"Hide" : "Show" }</button>
            {
                show&&<h1>Clock: {time}</h1>
            }
        </div>
    )
}

export default Clock;