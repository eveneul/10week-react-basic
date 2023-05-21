import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setList((current) => [todo, ...current]);
    setTodo("");
  };

  console.log(list);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          placeholder="write your to do "
        />
        <button>Add To do</button>
      </form>
      {list.map((item, index) => (
        <>
          <span key={item}>{item}</span>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
