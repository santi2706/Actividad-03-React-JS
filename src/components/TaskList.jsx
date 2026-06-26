import Checkbox from './Checkbox.jsx'

function TaskList({ tasks, toggleTask, clearCompleted, pendingCount, completedCount }) {
  return (
    <section className="task-list">
      <div className="task-list-summary">
        <div>
          <h2>Lista de tareas</h2>
          <p className="task-summary">
            {pendingCount} pendientes · {completedCount} completadas
          </p>
        </div>
        {completedCount > 0 && (
          <button type="button" className="button button-secondary" onClick={clearCompleted}>
            Eliminar completadas
          </button>
        )}
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">Aún no hay tareas. Usa el formulario para empezar.</p>
      ) : (
        <ul className="task-items">
          {tasks.map((task) => (
            <li key={task.id} className="task-row">
              <Checkbox task={task} onToggle={() => toggleTask(task.id)} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList
