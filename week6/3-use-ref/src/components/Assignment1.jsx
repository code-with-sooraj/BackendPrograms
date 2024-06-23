import { useEffect, useRef } from "react";

export  function Assignment1(){
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleButtonClick=()=>{
        inputRef.current.focus();
    };
    return (
        <div>
        <h1>Assignment 1</h1>
        <input ref={inputRef} type="text" placeholder="Enter your text here"/>
        <button onClick={handleButtonClick}>Focus</button>
        </div>
    )
}