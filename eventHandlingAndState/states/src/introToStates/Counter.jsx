import React, { useState } from 'react'

const Counter = ()=>{
    const [counter, setCounter] = useState(0);

    function HandleIncrease(){
        setCounter(counter+1);
    }

    function HandleDecrease(){
        setCounter(counter-1);
    }
    return(
        <div>
            <p id="counter_value">{counter}</p>
            {counter < 5 && <button onClick={HandleIncrease}>Increase</button>}
            {counter > 0 && <button onClick={HandleDecrease}>Decrease</button>}
        </div>
    )
}

export default Counter;