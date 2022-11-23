import React from 'react'
import Todo2 from './Todo2'

function Todolist2({todos2, setTodos2}) {
  return (
    <div>Todolist2
        {todos2.map((todo2) => (
            <Todo2 text={todo2.text2} id={todo2.id} />
        ) )}
    </div>
  )
}

export default Todolist2