// Este componente reutilizable representa una tarea individual con su checkbox.
function Checkbox({ task, onToggle }) {
  return (
    <label className={`checkbox-wrapper ${task.done ? 'checkbox-done' : ''}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={onToggle}
        className="checkbox-input"
      />
      <span className="checkbox-text">{task.text}</span>
    </label>
  )
}

export default Checkbox
