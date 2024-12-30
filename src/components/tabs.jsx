import { useState } from "react"

export default function Tabs(){
    const [activeIndex,setActiveIndex] = useState(0)
    const data = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit  1.'
        },
        {
            title: 'Section 2',
            content: 'Lorem ipsum dolor sit amet consectetur  2'
        },
        {
            title: 'Section 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.3'
        }
    ]
    return <>
    <h1> Tabs</h1>
    <div style={{display:"flex",gap:"10px"}}>
    {
        
        data?.map( (item , index) => {
            return <div key={index} style={{cursor:"pointer",border:activeIndex==index ? "1px solid black":"1px solid white",padding:"10px"}} onClick={() => setActiveIndex(index)} >
                {item.title}
            </div>
        })
    }
    

</div>
<div>
        {data[activeIndex].content}
    </div>
    
    </>
}