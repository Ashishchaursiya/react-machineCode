import { useEffect, useState } from "react"

export default function Todo(){
    const [todos, setTodos] = useState([ ])
    const[ todo,setTodo] = useState('')
    const [edit,setEdit] = useState({})
    const addTodo = () => {
        setTodos([...todos, {id:todos.length+1, title:todo, completed:false}])
        setTodo('')
    }
    const onDelete = (id) => {
        setTodos(todos.filter( (item) => item.id !== id))
    }
    const onComplete = (id) => {
        setTodos(todos.map( (item) => {
            if(item.id === id){
                return {...item, completed:!item.completed}
            }
            return item
        }))
    }
    const editHandle = (item) => {
        if(item?.id){
setEdit(item)
setTodo(item.title)
        }else{
         const updateTodo = todos.map( (item) => {
            if(item.id === edit.id){
                return {...item, title:todo}
            }
            return item
         })
            setTodos(updateTodo)
            setEdit({})
            setTodo('')
        }

    }
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos')
        if (savedTodos?.length>0) {
            setTodos(JSON.parse(savedTodos))
        }
    }, [])
    
    useEffect(() => {
        if(todos.length>0){
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        
    }, [todos])
    return <>
    <h1> Todos</h1>
    <div style={{display:"flex"}}>
        <input type="text" placeholder="Enter Todo"  value={todo} onChange={ (e) => setTodo(e.target.value)}/>
        <button onClick={edit?.id ? editHandle:addTodo}>{edit?.id ? 'save':'add'}</button>
    </div>
    
    <div style={{display:"flex", flexDirection:"column",gapx:"20px"}}>
        {
            todos.map( (item ) => {
                return <div key={item.id} style={{display:"flex",gap:"20px"}}>
                     <div style={{textDecoration:item.completed? "line-through":""}}>{item.title} </div>
                     <div>
                            <button onClick={ () => onDelete(item.id)}>delete</button>
                            <button onClick={ () => editHandle(item)}>edit</button>  
                            <button onClick={ () => onComplete(item.id)}>complete</button> 
                    </div>
                </div>
            })
        }
          
        </div>
        
    
    
    </>
}