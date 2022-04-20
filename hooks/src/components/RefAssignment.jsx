import React,{useRef,useState} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

function RefAssignment(){
    const alertRef = useRef(false)
    const timeoutRef = useRef(null)
    const [buttonText,setButtonText] = useState("Click this button to show alert");
    const [input,setInput] = useState("")

    const showAlert = ()=>{
        alertRef.current = true;
        setButtonText("clicked")
        timeoutRef.current = setTimeout(()=>{
            if(alertRef.current){
                alert("alerted")
            }
        },5000);
    }

    const cancelAlert = () => {
            timeoutRef.current = false;
            clearTimeout(timeoutRef.current)
    }

    return(
        <>
            <input/>
            <button onClick={showAlert}>{buttonText}</button>
            {alertRef.current &&<button onClick={cancelAlert}>cancel</button> }

        </>
    )
}
export default RefAssignment