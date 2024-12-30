import { useState } from "react";
import { FaFile, FaFolder,FaFolderOpen } from "react-icons/fa";

export default function FileExplorer({file}) {
    const [open,setOpen] = useState(false)
    return <div style={{borderLeft:"3px solid black",paddingLeft:"20px"}}>  
    <h1 onClick={ () =>setOpen(!open)} > {file.type=="folder" ? open ? <FaFolderOpen /> : <FaFolder /> :<FaFile />}
    <span style={{marginLeft:"10px"}}>
    {file.name}
    </span>
     </h1>
    {file?.children?.length>0 && open && file.children.map( (item,index) => {
        return <FileExplorer file={item} />
    })}
    </div>
    
      
    
      
      
   
      
   
 
}