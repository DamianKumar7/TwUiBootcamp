import React,{useRef,useState} from "react";

function RefAssignment(){
    const alertRef = useRef(false)
    const timeoutRef = useRef(null)
    const [buttonText,setButtonText] = useState("Click this button to show alert");
    const [input,setInput] = useState("")
    const inputRef = useRef()

    const showAlert = ()=>{
        alertRef.current = true;
        setButtonText("clicked")
        timeoutRef.current = setTimeout(()=>{
            if(alertRef.current){
                alert(inputRef.current.value)
            }
        },5000);
    }

    const cancelAlert = () => {
            timeoutRef.current = false;
            clearTimeout(timeoutRef.current)
    }

    const handleInput = (event)=>{
        setInput(event.target.value)
    }

    return(
        <>
            <input value={input} onChange={handleInput} ref={inputRef}/>
            <button onClick={showAlert}>{buttonText}</button>
            {alertRef.current &&<button onClick={cancelAlert}>cancel</button> }

        </>
    )
}
export default RefAssignment