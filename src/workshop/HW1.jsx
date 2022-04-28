import { useState } from "react";

const initialList = [
];

const HW1 = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  const [count, setCount] = useState(0)
  const [discount, setDisCount] = useState(0)
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
    setCount(newList.length-discount);
  }

  const handleToggle = (event) => {
    if(event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none';
      
    setDisCount(discount-1);
    setCount(count+1);
    } else {
      event.target.style.textDecoration = 'line-through'
    setDisCount(discount+1);
    setCount(count-1);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <br></br>

      <div> {count} remaining out of {list.length} tasks</div>

      <ul>
        {list.map((item) => (
          <li key={item.id} onClick={handleToggle} >{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HW1