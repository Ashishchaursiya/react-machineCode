import { useState } from "react";

export default function Stepper({steps}) {
 
const [activeStep, setActiveStep] = useState(0)
  
const nextHandler = () => {
    setActiveStep(activeStep+1)}
    const prevHandler = () => { setActiveStep(activeStep-1)}
  return (
    <div  style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="steps">
     {steps.map((item,index)  => {
          return <div key={index} >
                 <div className="stepBox" style={{display:"flex"}}>
                 <div className="step" style={{backgroundColor:  index<=activeStep ? "blue" : "grey"}}>
                 {index+1}
                        </div>
                        <div className="stepTitle">
                        {item.title}
                        </div>
                   
                    </div>
                    {
                        index !== steps.length-1 && 
                        <div className="stepLine" style={{width:"3px",height:"50px", backgroundColor: index<activeStep ? "blue" : "grey", marginLeft:"20px"}}>
                            </div>
                    }
                       
            </div>
     })}
        </div>
        <div className="stepContent">
            {steps[activeStep].content}
        </div>
        <div className="stepButtons">
            {activeStep !== 0 && <button onClick={prevHandler}>Back</button>}
           
            {activeStep !== steps.length-1  && <button onClick={nextHandler}>Next</button>}
            
        </div>
      
    </div>
  );
}