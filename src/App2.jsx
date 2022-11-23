import React, { useState } from 'react'
import Form2 from './Form2'
import Todolist2 from './Todolist2';

function App2() {
    const [inputText2,setInputText2] = useState();
    const [todos2, setTodos2] = useState([]);


  return (
    <div>App2
        <Form2 inputText2={inputText2} setInputText2={setInputText2} todos2={todos2} setTodos2={setTodos2} />
        <Todolist2 todos2={todos2} setTodos2={setTodos2} />
    </div>
  )
}

export default App2