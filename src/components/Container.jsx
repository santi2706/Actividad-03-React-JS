import { useState } from 'react'
import FormTodo from './FormTodo.jsx'
import TaskList from './TaskList.jsx'

// Este componente principal guarda el estado general de la lista.
function Container() {
  const [tasks, setTasks] = useState([])

  // Añade una tarea nueva a la lista cuando el formulario se envía.
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

  // Cambia el estado de una tarea entre pendiente y completada.
  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    )
  }

  // Elimina de la lista todas las tareas que ya están completadas.
  const clearCompleted = () => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.done))
  }

  const pendingTasks = tasks.filter((task) => !task.done)
  const completedTasks = tasks.filter((task) => task.done)
  const pendingCount = pendingTasks.length
  const completedCount = completedTasks.length

  return (
    <section className="todo-container">
      <header className="todo-header">
        <h1>Mi lista de tareas</h1>
        <p>Organiza tu día, marca lo que ya hiciste y deja espacio para lo que aún falta.</p>
      </header>

      <FormTodo addTask={addTask} />

      <TaskList
        pendingTasks={pendingTasks}
        completedTasks={completedTasks}
        toggleTask={toggleTask}
        clearCompleted={clearCompleted}
        pendingCount={pendingCount}
        completedCount={completedCount}
      />
    </section>
  )
}

export default Container
