
import React,{ useState,useCallback} from "react";
import { useRef } from "react"

export function Assignment2(){
    const [renderCount, setRenderCount] = useState(0);
    let renderTimes = useRef(0);
    const handleRerender = ()=>{
        setRenderCount(renderCount+1);
    };
    renderTimes.current++;

    return (
        <div>
            <p>This component has rendered {renderTimes.current} time</p>
            <button onClick={handleRerender}>Rerender</button>
        </div>
    );
}