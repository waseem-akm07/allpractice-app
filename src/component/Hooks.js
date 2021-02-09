import React, { useState, useEffect } from 'react'
import RandomColor from 'randomcolor';

// function Hooks() {

//     const [value, setValue] = useState(0);
//     console.log(value);

//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={() => setValue(prevCount => prevCount + 1)}>Change!</button>
//         </div>
//     )
// }

function Hooks() {

    const [value, setValue] = useState(0);

    const [color, setcolor]=useState('');
  
    function change() {
        setValue(prevCount => prevCount + 1);
    }

    useEffect(()=>{
        setcolor(RandomColor());
    }, [value]);
  
    return (
      <div>
        <h1 style={{ color: color }}>{value}</h1>
        <button onClick={change}>Change!</button>
      </div>
    );
  }
export default Hooks