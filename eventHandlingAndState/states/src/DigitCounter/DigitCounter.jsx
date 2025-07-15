// import {useState} from 'react'
// import './DigitCounter.css'

//  export default function DigitCounter(){

//     let [counter, setCounter] = useState(0);

//     function handleIncrease(){
//         setCounter(counter+1)
//         updateTextColor();
//     }

//     function handleDecrease(){
//         setCounter(counter-1)
//         updateTextColor();
//     }

//     function handleReset(){
//         setCounter(0);
//         updateTextColor();
//     }

//     function updateTextColor(){
//         let elem = document.getElementById("result");
//         if(counter > 0) elem.style.color = "rgba(26, 219, 26, 0.781)";
//         else if(counter < 0) elem.style.color = "rgba(219, 26, 26, 0.781)";
//         else elem.style.color = "rgb(131, 131, 131)";
//     }
    
//     return(
//         <div id="wrapper">
//             <h1 id="heading">Counter</h1>
//             <p id="result">{counter}</p>
//             <div id="button_group">
//                 <button id="decrement_btt" onClick={handleDecrease}>Decrease</button>
//                 <button id="reset_btt" onClick={handleReset}>Reset</button>
//                 <button id="increment_btt" onClick={handleIncrease}>Increase</button>
//             </div>
//         </div>
//     )
//  }



import { useState } from 'react';
import './DigitCounter.css';

export default function DigitCounter() {
    const [counter, setCounter] = useState(0);

    // Compute color based on current counter
    const getTextColor = () => {
        if (counter > 0) return "rgba(26, 219, 26, 0.781)";
        if (counter < 0) return "rgba(219, 26, 26, 0.781)";
        return "rgb(131, 131, 131)";
    };

    function handleIncrease() {
        setCounter(prev => prev + 1);
    }

    function handleDecrease() {
        setCounter(prev => prev - 1);
    }

    function handleReset() {
        setCounter(0);
    }

    return (
        <div id="wrapper">
        <h1 id="heading">Counter</h1>
        <p id="result" style={{ color: getTextColor() }}>{counter}</p>
        <div id="button_group">
            <button id="decrement_btt" onClick={handleDecrease}>Decrease</button>
            <button id="reset_btt" onClick={handleReset}>Reset</button>
            <button id="increment_btt" onClick={handleIncrease}>Increase</button>
        </div>
        </div>
    );
}
