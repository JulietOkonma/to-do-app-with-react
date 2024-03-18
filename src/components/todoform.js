import React, {useState,useEffect,useRef}from 'react';



function ToDoform (Props) {
    const [input,setInput] = useState (Props.edit ? Props.edit.value : "");

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    } )

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        Props.onSubmit({
            id: Math.floor(Math.random() * 10000),
           text: input
        })
        setInput('')
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit }>
      {Props.edit ? ( 
        <>
      <input type=
      'text' placeholder='update your item....'
       value={input}
        name ='text'  
        className='todo-input edit'
        onChange=
        {handleChange} 
        ref = {inputRef}
        />

        <button className='todo-button edit' > update</button>
        </>
): 
(
  <>
  <input type='text'
   placeholder='Add a task here....'
    value={input}
name ='text' 
 className='todo-input'
onChange={handleChange} 
ref = {inputRef}
/>

<button className='todo-button'> Add To-do</button>
</>
)}
       
    </form>
      

  );
}
export default ToDoform