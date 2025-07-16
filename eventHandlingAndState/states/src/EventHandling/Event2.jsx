import React from 'react'

const ChildA = ({text, eventHandler})=>{
  return <button onClick={eventHandler}>{text}</button>
}

const ChildB = ({text, eventHandler, params}) =>{
  return <button onClick={()=>eventHandler([params])}>{text}</button>
}

const Event2 = () => {
  return (
    <>
      <ChildA eventHandler={()=>alert("CLICKED")} text="Button-A"/>
      <ChildB eventHandler={(val)=>alert(val)} text="Button-B" params={5}/>
    </>
  )
}

export default Event2