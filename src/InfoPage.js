import React from "react";
import allImg from "./allImg.png"

export default function InfoPage(){
  return(
    <div className="infoPageDiv">
            <h1 className="title">How to use?</h1>
            <img src = {allImg} className = "mainImg" alt = "screenshot of stats screen with annotations"/>
            <div className="textDiv">
                  <h1 className="infoQuestion">A:</h1>
                  <p className ="infoText"> This number represents your rating. It is calculated by subtracting your Mandatory work from the recommended 16 hours of the day an individual should have, afterwards you are evaluated by how well you allocate the rest of your time socializing, improving your physical health, improving your mental health and pursuing your passion; To achieve the highest rating it is best to follow the ratio of 1 : 2: 2: 5 respectively. </p>
                  <h1 className="infoQuestion">B:</h1>
                  <p className ="infoText">
                    This number shows how many activities you pushed through despite not wanting to. You may also want to include your victories against negative urges in this number.
                    This number will also be used to calculate your rating.
                  </p>
                  <h1 className="infoQuestion">C:</h1>
                  <p className ="infoText">
                  Buttons that allows you to increase and decrease the number.
                  </p>
                  <h1 className="infoQuestion">D:</h1>
                  <p className ="infoText">
                  These boxes allow you to change the amount of time spent doing the tasks written in the text at the top of each box. The numbers represent how much time you spent in minutes doing each task. When hovering over each box, a minus sign will appear at the bottom, these signs allow you to decrease the time written on the box by 10 minutes.  To increase the time, you have to click on the text at the top of each box ex. Mandatory, Passion etc.
                  </p>
                  <h1 className="infoQuestion">E:</h1>
                  <p className ="infoText">Represents the amount of time you spent doing Mandatory tasks in the day, this can include work, school, cooking, cleaning etc. Your Mandatory time will not directly influence your rating.</p>
                  <h1 className="infoQuestion">F:</h1>
                  <p className ="infoText"> Represents the amount of time taken in your day to pursue your passion, if your passion includes your work then put all of your points into Passion rather than Mandatory.</p>
                  <h1 className="infoQuestion">G:</h1>
                  <p className ="infoText">Self Improvement represents how much time in minutes you spent doing physical activities. This includes working out, doing yoga, hiking, playing a sport etc.</p>
                  <h1 className="infoQuestion">H:</h1>
                  <p className ="infoText">Socializing includes time spent talking to people separate from any other activities, this can be talking to a family member, friends, networking etc. </p>
                  <h1 className="infoQuestion">I:</h1>
                  <p className ="infoText">This category includes the time spent taking care of your mind , this can include meditating, reading, going outside etc.</p>
                  <h1 className="infoQuestion">J:</h1>
                  <p className ="infoText">
                    Button that allows you to add a card.
                  </p>
                  <h1 className="infoQuestion">K:</h1>
                  <p className ="infoText">
                  Represents the card number. It is recommended that you fill out a card once every day to find an accurate rating.
                  </p>
                  <h1 className="infoQuestion">L:</h1>
                  <p className ="infoText">Represents the card. The rank of the card is calculated based on the amount of time wasted in the day assuming you get 8 hours of sleep and have a 16-hour day. The less amount of time is wasted, the greater the rank. Your card rank does not affect your rating.</p>
                  <h1 className="infoQuestion">M:</h1>
                  <p className ="infoText"> Allows you to delete a card. The day number for the rest of the cards will change accordingly.</p>
            </div>
    </div>
  )
}