import Checkbox from './Checkbox.jsx'

// Este componente muestra la lista separada entre tareas pendientes y completadas.
function TaskList({ pendingTasks, completedTasks, toggleTask, clearCompleted, pendingCount, completedCount }) {
  return (
    <section className="task-list">
      <div className="task-list-summary">
        <div>
          <h2>Tu progreso</h2>
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

      <div className="task-section">
        <h3>Tareas por hacer</h3>
        {pendingTasks.length === 0 ? (
          <p className="empty-state">No tienes tareas pendientes. ¡Buen trabajo!</p>
        ) : (
          <ul className="task-items">
            {pendingTasks.map((task) => (
              <li key={task.id} className="task-row">
                <Checkbox task={task} onToggle={() => toggleTask(task.id)} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="task-section">
        <h3>Completadas</h3>
        {completedTasks.length === 0 ? (
          <p className="empty-state">Aún no marcas ninguna tarea como hecha.</p>
        ) : (
          <ul className="task-items">
            {completedTasks.map((task) => (
              <li key={task.id} className="task-row">
                <Checkbox task={task} onToggle={() => toggleTask(task.id)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default TaskList
