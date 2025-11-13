import React,{useState, useEffect} from "react";
const Homepage=()=>{

    const [counter, setCounter]=useState(0);

    const[counterSignal, setCounterSignal]=useState(0);

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setCounterSignal(current=>current+1);
        },1000);

        return ()=>clearInterval(intervalId);
    },[])
    const changeValue=(value)=>{
        setCounter(counter+value);
    };

    const resertValue=(value)=>{
        setCounter(value);
        setCounterSignal(value);
    };

    return(
        <div>
            <h1>Home</h1>
            <h2>Fundamentos</h2>

            <h1>Contador (Variable Normal): {counter}</h1>
            <h1>Contador (Signal Automatico): {counterSignal}</h1>

            <button onClick={()=>changeValue(1)}>Incrementar</button>
            <button onClick={()=>changeValue(-1)}>Decrementar</button>
            <button onClick={()=>resertValue(0)}>Resetear</button>
        </div>
    );
}
export default Homepage;