import {useState} from 'react'

//  ========PASSING DATA FROM PARENT TO CHILD========
//  =================================================
// export default function ChildA({count}){
//     return(
//         <>
//             <p>Child-A : {count}</p>
//         </>
//     )
// }



//  ========PASSING DATA FROM CHILD TO PARENT (method-1)========
//  ============================================================
// export default function ChildA({handleDataFromChild}){

//     const [count, setCount] = useState(0);

//     function handleChildButton(){
//         setCount(prev=>prev+1)
//         handleDataFromChild(count);
//     }

//     return(
//         <>
//             <p>Child-A : {count}</p>
//             <button onClick={handleChildButton}>Child Button</button>
//         </>
//     )
// }



//  ========PASSING DATA FROM CHILD TO PARENT (method-2)========
//  ========PASSING DATA FROM ONE CHILD TO ANOTHER(siblings)====
//  ============================================================
export default function ChildA(props){

    function handleClick(){
       props.onChildButtonClick();
    }

    return(
        <>
            <p>Child-A : {props.count}</p>
            <button onClick={handleClick}>Child Button</button>
        </>
    )
}
