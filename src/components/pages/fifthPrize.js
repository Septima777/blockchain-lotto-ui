import React, { useEffect, useState, Component } from "react";
import './fifthPrize.css';

function FifthPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIFTH &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FourthPrizeName() {
    return (
    <div className="col-4 offset-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FOURTH &nbsp;&nbsp;PRIZE
    </div>
    );
}

function ThirdPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;THIRD &nbsp;&nbsp;PRIZE
    </div>
    );
}

function SecondPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;SECOND &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FirstPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIRST &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FirstSidePrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIRST SIDE&nbsp;&nbsp;PRIZE
    </div>
    );
}

function LastTwoPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;LAST TWO DIGITS&nbsp;&nbsp;PRIZE
    </div>
    );
}

function LastThreePrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;LAST THREE DIGITS&nbsp;&nbsp;PRIZE
    </div>
    );
}

function DrawingCircle() {
    return(
            
                    <div className="row centered">                    

                        <div className="col-2">
                            <div class="box">
                            {/* <img className="image" src={logo} alt="Logo" /> */}
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div class="col-2">    
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>

                    
                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                </div>            
                            </div>
                        </div>
                </div>
    );
}

function ShowNumber() {
    return (
        <div className="row num-center">
            <div className="col-2">
                <section class="stage">
                    <figure class="ball8">
                        <span class="shadow"></span>
                        <span class="eight"></span>
                    </figure>
                </section>
            </div>
            <div className="col-2">
                2
            </div>
            <div className="col-2">
                3
            </div>
            <div className="col-2">
                4
            </div>
            <div className="col-2">
                5
            </div>
            <div className="col-2">
                6
            </div>

        </div>
    );
}


class FifthPrize extends Component {

    constructor(props) {
      super(props);  
      
      this.state = {
        timeCount: []
      }     
      
    }

    FifthPrize = () => {
        
    }

    FirstThreedigitsPrize = () => {
        
    }
    
    LastThreeDigitsPrize = () => {
        
    }

    LastTwoDigitsPrize = () => {
        
    }

    FirstPrizeSide = () => {
        
    }   
  

    render() { 

        let prize = null;
        if (prize != null) {
            prize = <FifthPrizeName/>;
          } else {
            prize = <FourthPrizeName/>
          }
    
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        {prize}
                    </div>
                </div>

                <div className="container">
                    <DrawingCircle/>
                </div>

                <div className="container">
                    <ShowNumber/>
                </div>

                
            </div>
        );
    }
}

export default FifthPrize;