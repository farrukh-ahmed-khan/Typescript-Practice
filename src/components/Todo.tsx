import React, { useRef } from 'react';
import { useState } from 'react';

const Todo = () => {
    // const [todo, setTodo] = useState('')
    const inputRef= useRef<HTMLInputElement | null>(null) 
    const [todoList, setTodoList] = useState<string[]>([])
    const addTodo = () => {
        // setTodoList([...todoList, todo])
        // setTodo("")

        // get item through ref
        if(inputRef.current){
            const Todo= inputRef.current.value
            setTodoList([...todoList, Todo])
        }
    }

    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setTodo(e.target.value)
    // }
    return (
        <div>
            {/* <input 
          type="text"
          placeholder='Enter todo'
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
           />
           <button onClick={addTodo}>Add Item</button>
           <ul>
               {todoList.map(item=>{
                   return <li key={item}>{item}</li>
               })}
           </ul> */}


           {/* update code of typescript using function*/}
            <input
                type="text"
                placeholder='Enter todo'
                ref={inputRef}
            />
            <button onClick={addTodo}>Add Item</button>
            <ul>
                {todoList.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default Todo;
