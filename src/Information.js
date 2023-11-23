import React from "react"

export default function Info(props){
  return(
    <div className = "infoDiv">
        <p className="InformationP">
          How many unwanted scenarios did you push through today?
        </p>
        <p className="buttonP">
          {props.amountUnwanted}
        </p>
        <button onClick = {props.setRisk} className = "infoBtn">+</button>
        <button onClick={props.setRiskMinus} className = "infoBtn">-</button>
    </div>

  )
}