import './App.css';
import {useState} from 'react'
import Box from './components/Box'
import Bar from './components/Bar'

function App() {

  const [boxes, setBoxes] = useState(
    [
      {color: "red"},
      {color: "blue"},
      {color: "green"}
    ])

    const createBox = (newBoxObj) => {
      console.log(newBoxObj)

      setBoxes([...boxes, newBoxObj])
    }

  return (
    <div className="App">
      <div>
        <Bar createBox={createBox}/>
      </div>
      <div>
      {
        boxes.map( (box, idx)=>{
        return <Box box={box} key={idx} />
      })
      }
      </div>
    </div>
  );
}

export default App;
