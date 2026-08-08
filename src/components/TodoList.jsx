import TodoItem from "./TodoItem";

/**
 * Substitui os antigos `todoList.appendChild(todo)` do JS puro.
 * Em React, a lista inteira é sempre re-renderizada a partir do array
 * `todos` — não manipulamos o DOM na mão, só descrevemos como ele
 * deve ficar para cada item.
 *
 * `key={todo.id}` é obrigatório em listas no React: é assim que ele
 * sabe qual item é qual entre uma renderização e outra.
 */
function TodoList({ todos, onToggleDone, onEdit, onRequestRemove }) {
  if (todos.length === 0) {
    return (
      <div className="todo-empty">
        <i className="fa-regular fa-clipboard"></i>
        <p>Nenhuma tarefa ainda. Adicione a primeira acima!</p>
      </div>
    );
  }

  return (
    <div id="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onEdit={onEdit}
          onRequestRemove={onRequestRemove}
        />
      ))}
    </div>
  );
}

export default TodoList;
