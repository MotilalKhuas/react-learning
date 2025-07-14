// const HigherOrderComponent = function({children}){
//     const style = {
//         border : "2px solid greenyellow",
//         padding : "1rem"
//     }
//     return(
//         <div style={style}>
//             {children}
//         </div>
//     )
// }

import './ProjectCard.css'
const HigherOrderComponent = function(props){
    const style = {
        border : "2px solid greenyellow",
        padding : "1rem",
    }
    return(
        <>
            <div style={style}>
                {props.children}
            </div>
        </>
    )
}

export default HigherOrderComponent

