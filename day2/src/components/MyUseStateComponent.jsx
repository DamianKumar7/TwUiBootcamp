import React,{useState} from 'react'
import MyUseStateComponent from "./MyUseStateComponent";

const MyStateComponent = (props) => {
    const [state, setState] = useState(true);
    let myString1 = 'Hello World';
    let myString2 = 'Bye World';

    console.log('MY STATE COMPONENT RENDERED');

    const buttonClickHandler = () => {
        setState(false);
    };

    return (
        <div>
            <h1>{state ? myString1 : myString2}</h1>
            <button onClick={buttonClickHandler}>Change it.</button>
            <hr />
            <MyUseStateComponent />
        </div>
    );

}

export default MyStateComponent;