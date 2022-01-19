import React from 'react';
import Box from './Box';
import {useState} from 'react'

const Bar = (props) => {
  const [newColor, setNewColor] = useState('')

  const submitColor = (e) =>{
    e.preventDefault();
    console.log(newColor)

    const myNewBox = {
      color: newColor
    }

    props.createBox(myNewBox);

  }

  return <div style = {{ display: 'inline-block'}}>

    <div>
      Color
    </div>
    <div>
      <form onSubmit={submitColor}>
        <input 
        type="text" 
        onChange={e => setNewColor(e.target.value)} 
        value={newColor}
        />
        <button>Add</button>
      </form>
    </div>
  </div>;
};

export default Bar;
