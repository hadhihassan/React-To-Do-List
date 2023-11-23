import './app.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDO] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDO(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false },])} className="fas fa-plus" ></i>
      </div>
      <div className="todos">
        {toDos.map((value, index) => (
          <div className="todo" key={value.id}>
            <div className="left">
              <input
                onChange={(e) => {
                  setToDos((prevToDos) =>
                    prevToDos.map((obj) =>
                      obj.id === value.id ? { ...obj, status: e.target.checked } : obj
                    )
                  );
                }}
                value={value.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{value.text}</p>
            </div>
            <div className="right">

              <i onClick={() => {
                setToDos((prevToDos) => {
                  console.log(prevToDos,index);
                  const newToDos = [...prevToDos];
                  newToDos.splice(index, 1);
                  return newToDos;
                });
              }} className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {toDos.map((obj) => {
          if (obj.status) {
            return(
              <div> 
              <h3 style={{ color: 'white' }} key={obj.id}>{obj.text}</h3>
              </div>

            )
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
