import { useState } from "react"

export default function Accordian(){
    const [activeIndex,setActiveIndex] = useState(0)
    const data = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatum.'
        },
        {
            title: 'Section 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatum.'
        },
        {
            title: 'Section 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptatum.'
        }
    ]
    const Content = ({title, content,active,index,setActiveIndex}) => {
        
        return <div  style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <h3>{title}</h3>
            <p>{active && content}</p>
            </div>
            <div onClick={() => setActiveIndex(index)} style={{cursor:"pointer"}}>
                {
                   active ? '-':'+' 
                }
            </div>
           
        </div>
    }
    return <>
    <h1>Accordian</h1>
    {
        data?.map((item, index) => {
            return  <Content title={item.title} content={item.content} active={activeIndex==index} {...{index,setActiveIndex}}/>
        })
    }

    </>
}