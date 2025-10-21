// https://www.greatfrontend.com/questions/user-interface/todo-list/v/7a1d2a32-a65e-4fb7-869b-4939fabad2b3


import {useState} from 'react'
export default function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([
    "Walk the dog",
    "Water the plants",
    "Wash the dishes",
  ])

  const handleAddTask = () => {
    if(task.trim() == "") return "";
    setTasks([...tasks, task])
  }
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_,i)=> i!== index);
    setTasks(newTasks);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" onChange={(e)=>setTask(e.target.value)}/>
        <div>
          <button onClick={()=> handleAddTask()}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((t,index)=>(
          <li key={index}>
          <span>{t}</span>
          <button onClick={()=>handleDelete(index)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}
