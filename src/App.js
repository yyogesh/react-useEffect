import './App.css';
import React, { useState } from 'react';
import Person from './Components/Person';
import WindowResize from './Components/WindowResize';
import Product from './Components/Product';

// const users = ['chris', 'nick'];
// const [SuperAdmin, SuperUser] = users;

function App() {
  let [count, setXCount] = useState(0);
  const [topic, setTopic] = React.useState({ name: 'React' });

  const increaseCount = () => {
    setXCount(prev => prev + 10);
    setXCount(prev => prev + 10);
    setXCount(prev => prev + 10);
    setXCount(prev => prev + 10);

    // const prevTopic = { ...topic };
    // prevTopic.xyz = 'abc'
    // setTopic(prevTopic);

    setTopic({ ...topic, xyz1: 'abc1' });
  }

  return (
    <div className="App">
      <WindowResize />
      <p>Count Value is : {count}</p>
      <p>{JSON.stringify(topic)}</p>
      <button onClick={increaseCount}>Count +</button>
      <hr />
      <Person />
      <Product />
    </div>
  );
}

export default App;
