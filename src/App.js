import Button from "./Button"
import Bottom from "./Bottom"
import './App.css';
import Head from "./Head"
import Info from "./Information"
import InfoPage from "./InfoPage"
import React from "react"
import {nanoid} from "nanoid"

function App() {
  const [startState, setStartState] = React.useState({
   home: true,
   info: false,
   stats: false
  
  })

function homeFunc (){
  setStartState(x => {
    return {...x, home: true, info: false, stats: false}
  })
}
function statsFunc (){
  setStartState(x => {
    return{ ...x, home: false, info: false, stats: true}
  })
}
function infoFunc (){
  setStartState(x => {
    return{ ...x, home: false, info: true, stats: false}
  })
}

  const [clickState, setClickState] = React.useState({
    Mandatory: 0,
    Passion: 0,
    selfImprovement: 0,
    selfImprovementStudies: 0,
    Socializing: 0,
    rank: "F",
    risk: 0,
    key: nanoid()
    
    }
  )
  const [allState, setAllState] = React.useState(
    () => JSON.parse(localStorage.getItem("allStates")) || []
    )

 React.useEffect(() => {
  localStorage.setItem("allStates", JSON.stringify(allState))
 }, [allState])
 function defRank(){
  let calculate = 960 - clickState.Mandatory
  let theRest = clickState.Passion + clickState.selfImprovement + clickState.selfImprovementStudies + clickState.Socializing
  let freeTime = calculate - theRest
  let wastedRatio = (freeTime/calculate)
  let rank1 = "Unknown"
  if(wastedRatio < 0 || wastedRatio === 0){
    rank1 = "S"
    }
    else if (wastedRatio < 0.1 && wastedRatio > 0){
    rank1 = "A"
    }
    else if (wastedRatio < 0.2 && wastedRatio > 0.1){
    rank1 = "B"
    }
    else if (wastedRatio < 0.3 && wastedRatio > 0.2){
    rank1 = "C"
    }
    else if (wastedRatio < 0.4 && wastedRatio > 0.3){
    rank1 = "D"
    }
    else {
    rank1 = "F"
    }
    return rank1
 }
 function setRisk (){
 setClickState( x => {
  return{...x, risk: x.risk + 1}
 })
 }
 function setRiskMinus (){
  setClickState(x => {
    return{...x, risk: x.risk - 1}
   })
 }
 function handleClick(event){
   
    setClickState(x => {
   return {...x, [event.target.name]: x[event.target.name] + 10, 
    rank: defRank() 
  }
 })
 }

 function addStats(){
  setClickState(x => {
    return {...x, key:nanoid(), rank: defRank()}
  })
  setAllState(x => {
   return [...x, clickState]
  })
 }
 function deleteBtn(event, noteId){
  setAllState(oldNotes => oldNotes.filter(note => note.key !== noteId))
  
 }
 function getPosition(elementToFind, arrayElements) {
  let i;
  for (i = 0; i < arrayElements.length; i += 1) {
      if (arrayElements[i] === elementToFind) {
          return i + 1;
      }
  }
  return null; //not found
}
function handleClick2(event){
setClickState(x => {
 return {...x, [event.target.name]: x[event.target.name] - 10, rank: defRank() }
})
}

function Rating(){
let newArray = []
for(let i = 0; i < allState.length; i++){
let x = 960 - allState[i].Mandatory
let socialRatio = x * 0.1
let passionRatio = x * 0.5
let SelfIStudiesRatio = x * 0.2
let SelfIRatio = x * 0.2
let a = allState[i].Socializing > socialRatio? (socialRatio + (-1 * (allState[i].Socializing - socialRatio)))/ socialRatio : allState[i].Socializing/socialRatio
let b = allState[i].Passion > passionRatio? (passionRatio + (-1 * (allState[i].Passion - passionRatio)))/ passionRatio : allState[i].Passion/passionRatio
let c = allState[i].selfImprovement > SelfIRatio? (SelfIRatio + (-1 * (allState[i].selfImprovement - SelfIRatio)))/ SelfIRatio : allState[i].selfImprovement/SelfIRatio
let d = allState[i].selfImprovementStudies > SelfIStudiesRatio? (SelfIStudiesRatio + (-1 * (allState[i].selfImprovementStudies - SelfIStudiesRatio)))/ SelfIStudiesRatio : allState[i].selfImprovementStudies/SelfIStudiesRatio
let total = (((a + b + c + d)/4) * 100) + allState[i].risk
newArray.push(total)
}
let average = 0
for(let j = 0; j < newArray.length; j++){
  average += newArray[j]
}
let k = Math.floor(average/newArray.length)? Math.floor(average/newArray.length): 0
return k
}
let BottomMapped = () => {
 let array = []
  for(let i = allState.length - 1; i > -1 ; i--){
  let k = <Bottom  
  selfImprovement = {allState[i].selfImprovement}
  Passion = {allState[i].Passion}
  selfImprovementStudies = {allState[i].selfImprovementStudies}
  Socializing = {allState[i].Socializing}
  Mandatory = {allState[i].Mandatory}
  risk = {allState[i].risk}
  rank = {allState[i].rank}
  day = {getPosition(allState[i], allState)}
  deleteBtn = {(event) => deleteBtn(event, allState[i].key)}
  key = {allState[i].key}
  />
  
array.push(k)
}
return array
}
  return (
    
     <div className = "appFlexDiv">
      <Head
      Home = {homeFunc}
      statOptions = {statsFunc}
      infoOptions = {infoFunc}
      stateBoolean = {startState.home}
      />
      
      {startState.stats ?
       
       <div className="appFlexDiv2"> 
        
          <div className = "div1">
              <div>
                <Info 
                amountUnwanted = {clickState.risk}
                setRisk = {setRisk}
                setRiskMinus = {setRiskMinus}
                />
              </div>
          
              <div className="div4">
                  <h1 className="div4H1">
                      <Rating />
                  </h1>
              </div>
          </div>

          <div className="App">
                    <Button
                    name = "Mandatory"
                    nameForState = "Mandatory"
                    handleClick = {(event) => handleClick(event)}
                    value = {clickState.Mandatory}
                    handleClick2 = {(event) => handleClick2(event)}
                    />
                    <div>
                          <img src = "https://www.designbust.com/download/1058/png/stick_figure_png_transparent512.png" 
                          alt = "you" className = "stickImg"/>
                    </div>
                    <Button
                    name = "Passion"
                    nameForState = "Passion"
                    handleClick = {handleClick}
                    value = {clickState.Passion}
                    handleClick2 = {(event)=>handleClick2(event)}
                    
                    />
                    <Button
                    name = "Self improvement"
                    nameForState = "selfImprovement"
                    handleClick = {handleClick}
                    value = {clickState.selfImprovement}
                    handleClick2 = {(event) => handleClick2(event)}
                    />
                    <Button
                    name = "Socializing"
                    nameForState = "Socializing"
                    handleClick = {handleClick}
                    value = {clickState.Socializing}
                    handleClick2 = {(event) => handleClick2(event)}
                    />
                    <Button
                    name = "Self improvement (studies)"
                    nameForState = "selfImprovementStudies"
                    handleClick = {handleClick}
                    value = {clickState.selfImprovementStudies}
                    handleClick2 = {(event) => handleClick2(event)}  />
              </div> 

          <button onClick = {addStats} className = "infoBtn">
            Add
          </button>
          <div className = "bottomDiv">
                <BottomMapped />
          </div>
         </div>    
     :
        startState.home ?
        <div className="div5">
              <h1 className="div4H1">
                  <Rating />
              </h1>
        </div>
        :
        <InfoPage />
      }
    </div>
    

    
  );
}

export default App;
