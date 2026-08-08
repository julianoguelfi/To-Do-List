function TodoProgress({ completed, total }) {
  if (total === 0) return null;

  const percent = Math.round((completed / total) * 100);

  return (
    <div className="todo-progress">
      <div className="progress-label">
        <span>{completed} de {total} concluídas</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default TodoProgress;
