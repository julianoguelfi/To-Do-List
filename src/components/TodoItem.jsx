import { TbCancel } from "react-icons/tb";

/**
 * "Dumb component": não guarda estado próprio, só recebe dados (props)
 * e funções de callback, e chama essas funções quando o usuário clica
 * em algo. Quem decide o que acontece de fato (inclusive o modal de
 * confirmação de exclusão) é o App, lá em cima.
 */
function TodoItem({ todo, onToggleDone, onEdit, onRequestRemove }) {
  return (
    <div className={`todo ${todo.done ? "done" : ""}`}>
      <h3>{todo.text}</h3>

      <button className="finish-todo" onClick={() => onToggleDone(todo.id)}>
        {todo.done ? (
          <TbCancel size={18} />
        ) : (
          <i className="fa-solid fa-check"></i>
        )}
      </button>

      <button className="edit-todo" onClick={() => onEdit(todo)}>
        <i className="fa-regular fa-pen-to-square"></i>
      </button>

      <button className="remove-todo" onClick={() => onRequestRemove(todo)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default TodoItem;
