import React, { useState } from 'react'

function Input() {
    const [input,setInput] = useState("");
    const [items,setItems] = useState([])
    const handleClick = () => {
setInput("")
setItems([...items,input])
    }
    console.log(items);
  return (
    <div>
      <input
       type="text"
       value={input}
       onChange={(e) =>setInput(e.target.value)}

        />
        <button onClick={handleClick}>add</button>
<ul>
    {items.map((item) => (
        <li >{item}</li>
    )
    
    )}
</ul>
    </div>
  )
}

export default Input
