import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Doctor Appointment 2',
        day: 'Feb 5th at 2:35pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Doctor Appointment 3',
        day: 'Feb 6th at 2:30pm',
        reminder: false,
      },
    ]
  )
  
  useEffect(() => {
    setTasks([...tasks, {
      id: 4,
      text: 'Doctor Appointment 4',
      day: 'Feb 6th at 2:35pm',
      reminder: false,
    }])
  }, [])

  // Add task
  const addTask = (task) => {
    console.log(task, 'task')
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}/> : 
        'No Tasks'}
    </div>
  );
}

export default App;
