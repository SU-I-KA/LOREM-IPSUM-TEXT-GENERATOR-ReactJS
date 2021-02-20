import React, { useState } from 'react';
import './App.css';
import data from './data';
import Paragraph from './paragraphs';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const [validEntry, setValidEntry] = useState(true);

  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    const len = data.length;
    if(amount <= 0){
      setValidEntry(false);
      return;
    }
    if (amount >= len){
      amount = len;
    }
    setValidEntry(true);
    setText(data.slice(0, amount));
  };
  return (
    <div className='container'>
      <div className='title'>
        <h1>tired of boring lorem ipsum?</h1>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor='counter'>paragraphs:</label>
        <input type='number' className='count-input' value={count} name='counter' onChange={(e)=>setCount(e.target.value)} />
        <input type='submit' className='submit-btn' value='generate'/>
      </form>
      <div className='paragraphs'>
          <Paragraph validEntry={validEntry} text={text}/>
      </div>
    </div>
  );
}

export default App;
