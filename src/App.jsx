import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [show, setshow] = useState(false)

  useEffect(() => {
    let todostring = localStorage.getItem("list")
    if(todostring){
        let list = JSON.parse(localStorage.getItem("list"))
        setList(list)
    }

    
  }, [])
  

  const changeHandle = (e) => {
    setValue(e.target.value);
    // saveToLs();
  };

  const saveHandle = () => {
  if (value !== ""){
     setList([...list, { id: uuidv4(), value, isCompleted: false }]);
    setValue("");
  } else {
    alert("write something to add")
  }
  saveToLs();
  };

  const saveToLs = (params) => {
    localStorage.setItem("list", JSON.stringify(list))
  }
  
  const editHandle = (id) => {

    if(value == ""){
      let t = list.filter(i=>i.id === id)
    setValue(t[0].value)
    setList(list.filter(item => item.id !== id));
    saveToLs();
    }
    else{
      alert("already something to add or edit..")
    }
    
  };

  const delHandle = (id) => {
    setList(list.filter(item => item.id !== id));
    saveToLs();
  };

  const checkHandle = (id) => {
    console.log(id)
    setList(list.map(item => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item));
    saveToLs();
  };

  const checkhan = ()=>{
    setshow(!show)
  }


  return (
    <>
      <Navbar />
    <div className='whole'>

  
      <div className=" mx-auto my-7 rounder-x7 p-5 bg-violet-100 bol">
        <div className='title-logo'>
          <h1 className='title-texts mg'>MyTask - Record Your Plan</h1>
        </div>
        <div>
          <h2 className='text-xl font-bold mg'>Add a Todo</h2>
          <input type="text" className='mg text-inp' value={value} onChange={changeHandle} />
          <button className='mg save-but' onClick={saveHandle}>Save</button>
        </div>
        <input type="checkbox" className='show-finish mg' checked = {show} onChange={checkhan} /> Show finished
          <div className='h-[1px] bg-black opacity-15 w-5/6 mx-auto mg'></div>
        <div>
          <h1 className='text-xl font-bold mg'>My Tasks</h1>
        </div>

        <div className="todos mg">
          {list.map(item => (
           (show || !item.isCompleted) && <div className="todo mg" key={item.id}>
            <div className="spread">
              <input
                type="checkbox"
                className='click-checkbox'
                checked={item.isCompleted}
                onChange={() => checkHandle(item.id)}
              />
              <div className={item.isCompleted ? "linethrough line-first" : "line-first"}>{item.value}</div>
            </div>
              
              <div className="but">
                <button className="butu edit" onClick={() => editHandle(item.id)}>
                  Edit
                </button>
                <button className="butu del" onClick={() => delHandle(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
