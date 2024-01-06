import React, { useState } from 'react';
import './style.css';

function Counter() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOperation = () => {
    switch (selectedOption) {
      case 'increment':
        setList([...list, { value: count, color: getRandomColor() }]);
        setCount(count + 1);
        break;
      case 'decrement':
        setList([...list, { value: count, color: getRandomColor() }]);
        setCount(count - 1);
        break;
      case 'reset':
        setList([...list, { value: count, color: getRandomColor() }]);
        setCount(1);
        break;
      default:
        break;
    }
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {list.map((item, index) => (
        <span key={index} style={{ color: item.color }}>
          {' ' + item.value}
        </span>
      ))}
      <br />
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Select an operation --</option>
        <option value="increment">Increment</option>
        <option value="decrement">Decrement</option>
        <option value="reset">Reset</option>
      </select>
      <button onClick={handleOperation}>Apply Operation</button>
    </div>
  );
}

export default Counter;
