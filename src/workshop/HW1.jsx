import { useState } from "react";

const initialList = [
];

const HW1 = () => {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');
  const [count, setCount] = useState(0)

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
    setCount(newList.length);
  }

  const handleToggle = (event) => {
    if(event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none';

    setCount(count+1);
    } else {
      event.target.style.textDecoration = 'line-through'

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