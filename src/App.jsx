import { useState } from 'react'
import './App.css'
import Input from './input'
import TaskList from './TaskList';
function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [dateVal,setDate] = useState('');
  
function addTasks() {
    setTasks(prevTasks => [...prevTasks, { text, date: dateVal }]);   // Logs correct values
    setText(""); 
    setDate("");
}

  return (
    <>
      <div className='main-container'>
        <Input tasks={tasks} addTasks={addTasks} text={text} setText={setText} dateVal={dateVal} setDate={setDate} />
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}

export default App
