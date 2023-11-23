import React from "react"

export default function Button (props){
  
  const [xVar, setXVar]  = React.useState(false)
  
  function mouseEnter (){
    setXVar(true)
   }
   function mouseLeave(){
    setXVar(false)
   }
  
  return(
    <div className="buttonDiv" onMouseEnter={mouseEnter} onMouseLeave = {mouseLeave} >
    <input onClick={props.handleClick}  name = {props.nameForState}type = "button"value = {props.name} data-value= {props.value} className = "inputBtn"/>
    <p className = "buttonP">{props.value}</p>
    {xVar && <input className = "inputBtn2"onClick = {props.handleClick2} type = "button" name = {props.nameForState} value = "-"/>}
    </div>
  )
}