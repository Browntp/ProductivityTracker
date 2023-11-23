import React from "react"


export default function Bottom (props){
return(
  <div className = "bottomStatsDiv" >
    <h4>Day: {props.day}</h4>
    <p>Passion: {props.Passion}</p>
    <p>Self-Improvement: {props.selfImprovement}</p>
    <p>Self-Improvement(studies): {props.selfImprovementStudies}</p>
    <p>Mandatory: {props.Mandatory}</p>
    <p>Socializing: {props.Socializing}</p>
    <p>Risks taken: {props.risk}</p>
    <div>
    <strong>Rank: {props.rank}</strong>
    <button onClick = {props.deleteBtn} className = "bottomBtn">Delete</button>
    </div>
  </div>
)
}