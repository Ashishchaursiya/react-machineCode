import { useEffect, useState } from "react"

export default function TraficLights({lights = ['red', 'yellow', 'green']}) {
    const [currentLight, setCurrentLight] = useState(0)
    useEffect( () =>{
        const timer = setInterval( () => {
            setCurrentLight( currentLight =>  currentLight>=lights.length-1?0:currentLight+1)
        }, 1000)
        return () => clearInterval(timer)
    })
    return <>
    <h1> Lights</h1>
    {
        lights.map( ( light,index) => {
            return <div key={index} className="lightBox" style={{backgroundColor: index==currentLight?light:'grey'}}>

            </div>
        })
    }
    </>
}