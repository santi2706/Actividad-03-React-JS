import { useState } from 'react'
import FormTodo from './FormTodo.jsx'
import TaskList from './TaskList.jsx'

// Contenedor principal que administra tareas y lógica del estado.
function Container() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const trimmedText = text.trim()
    if (!trimmedText) return

    const newTask = {
      id: Date.now(),
      text: trimmedText,
      done: false,
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
  }

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    )
  }

  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.done))
  }

  const pendingCount = tasks.filter((task) => !task.done).length
  const completedCount = tasks.filter((task) => task.done).length

  return (
    <section className="todo-container">
      <header className="todo-header">
        <h1>Mis tareas</h1>
        <p>Agrega nuevas tareas, marca las que ya completaste y limpia las terminadas.</p>
      </header>

      <FormTodo addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        clearCompleted={clearCompleted}
        pendingCount={pendingCount}
        completedCount={completedCount}
      />
    </section>
  )
}

export default Container
