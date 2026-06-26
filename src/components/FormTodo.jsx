import { useState } from 'react'

function FormTodo({ addTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTask(taskText)
    setTaskText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="form-label">
        Nueva tarea
      </label>
      <div className="form-row">
        <input
          id="new-task"
          type="text"
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder="Describe tu próxima tarea..."
          className="text-input"
          autoComplete="off"
        />
        <button type="submit" className="button button-primary">
          Añadir
        </button>
      </div>
    </form>
  )
}

export default FormTodo
