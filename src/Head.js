import React from "react"

export default function Head(props){
  
  return (
<div className = "headDiv">
    <nav className = "nav">
        <div className = "navDiv" onClick={props.Home}>
          <h2 className="h2">Home</h2>
        </div>
        <div className = "navDiv navDiv2">
          <h2 className = "h2" >Options</h2>
          <div className = "headOptionsDiv">
              <div className="headOptions" onClick = {props.infoOptions}>Info</div>
              <div className="headOptions" onClick={props.statOptions}> Stats</div>
          </div>
        </div>
    </nav>
   {props.stateBoolean && <h1 className = "title">Develop Yourself In Real Life</h1>}
</div>
  )
}