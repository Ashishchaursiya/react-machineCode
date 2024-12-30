import { useEffect, useState } from "react"

export default function MindGame() {
    const [grid,setGrid] = useState(generateGrid())
    const [isLocked,setIslocked] = useState(false)
    const [indices,setIndeces] = useState([])
    const flipHandle = (item) => {
      if(item.isFlipe || isLocked) return
        let newGrid = [...grid]
        newGrid[item.id].isFlipe =  true
        setGrid(newGrid)
        setIndeces([...indices,item.id])
    }
    useEffect ( () => {
     if(indices.length === 2){
         setIslocked(true)
         setTimeout(() => {
             let [firstIndex,secondIndex] = indices
             let newGrid = [...grid]
             if(newGrid[firstIndex].number !== newGrid[secondIndex].number){
                 newGrid[firstIndex].isFlipe = false
                 newGrid[secondIndex].isFlipe = false
             }
             setGrid(newGrid)
             setIndeces([])
             setIslocked(false)
         },3000)
     }
    },[grid])
    return (
        <div style={{width:"500px", margin:"auto",display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:"3px"}}>
       
        {
            grid.map( (item,idx) => {
                return <div className="magicBox" onClick={() => flipHandle(item)}>
                    {item.isFlipe ? item.number: '?'}
                    </div>
            })
        }
        </div>
    )
}
function  generateGrid(){
    let arr = Array.from({length:18},(_,idx) => idx+1)
    arr = [...arr,...arr]
    let shuffledArr = arr.sort(() => Math.random() - 0.5)
    return shuffledArr.map( (item,idx) => {
        return {
            id:idx,
            number:item,
            isFlipe:false
        }
    })
}