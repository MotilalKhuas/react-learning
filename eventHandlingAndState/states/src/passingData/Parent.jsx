import {useState} from 'react'
import ChildA from './ChildA.jsx'
import ChildB from './ChildB.jsx'


//  ========PASSING DATA FROM PARENT TO CHILD========
//  =================================================
// export default function Parent(){
//     const [count, setCount] = useState(0);

//     function handleParentButton(){
//         setCount(prev=>prev+1)
//     }

//     return(
//         <div>
//             <h3>Parent : {count}</h3>
//             <ChildA count={count}/>
//             <button onClick={handleParentButton}>Parent Button</button>
//         </div>
//     )
// }




//  ========PASSING DATA FROM CHILD TO PARENT (method-1)========
//  ============================================================
// export default function Parent(){

//     const [parentCount, setParentCount] = useState(0); 

//     function handleDataFromChild(data){
//         setParentCount(data);
//     }

//     return(
//         <div>
//             <h3>Parent : {parentCount}</h3>
//             <ChildA handleDataFromChild={handleDataFromChild}/>
//         </div>
//     )
// }




//  ========PASSING DATA FROM CHILD TO PARENT (method-2)========
//  ============================================================
// export default function Parent(){

//     const [count, setCount] = useState(0); 

//     function incrementCountFromChild() {
//         setCount(prev => prev + 1);
//     }

//     return(
//         <div>
//             <p>Parent : {count}</p>
//             <ChildA count={count} onChildButtonClick={incrementCountFromChild}/>
//         </div>
//     )
// }



//  ========PASSING DATA FROM ONE CHILD TO ANOTHER (siblings)========
//  =================================================================
export default function Parent(){

    const [count, setCount] = useState(0); 

    function incrementCountFromChild() {
        setCount(prev => prev + 1);
    }

    return(
        <div>
            <p>Parent : {count}</p>
            <ChildA count={count} onChildButtonClick={incrementCountFromChild}/>
            <ChildB count={count}/>
        </div>
    )
}