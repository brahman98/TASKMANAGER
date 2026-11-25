import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, priority) {
    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }
  function updateTask(id, newTitle) {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, title: newTitle} : task
    ));
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              updateTask={updateTask}
            />
          } />

        <Route
          path='/stats'
          element={<Stats tasks={tasks} />}
        />
      </Routes>
    </>
  )
}

export default App
