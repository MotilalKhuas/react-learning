import React, {useState} from 'react'

const Counter = () => {
    const [num, setNum] = useState(0);

    async function increaseCounter(){
        setNum(num+1);
        await new Promise(resolve=>setTimeout(resolve, 2000));
        setNum(num-1);
        
    }

    return (
        <div> 
            <p>{num}</p>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default Counter