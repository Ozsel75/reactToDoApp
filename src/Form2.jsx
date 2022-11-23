import React from 'react'

function Form2({inputText2, setInputText2, todos2, setTodos2}) {
    const inputalici = (e) => {
        setInputText2(e.target.value)
        
    }

  const btnSubmit = (e) => {
    e.preventDefault();
    setTodos2([...todos2, {text2: inputText2, completed: false, id: Math.random()}])
    setInputText2("")
  }

  return (
    <div>Form2
        <form action="">
            <input type="text" onChange={inputalici} />
            <button onClick={btnSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Form2