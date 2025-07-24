import {useState} from 'react'

//  ========PASSING DATA FROM ONE CHILD TO ANOTHER(siblings)====
//  ============================================================
export default function ChildB(props){
    return(
        <>
            <p>Child-B : {props.count}</p>
        </>
    )
}