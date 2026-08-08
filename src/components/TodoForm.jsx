import { useState } from "react";

/**
 * Formulário controlado: o valor do input vive no estado do React (`text`),
 * não no DOM. É por isso que não precisamos mais fazer
 * `todoInput.value = ""` manualmente — basta resetar o estado.
 */
function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <p>Adicione sua tarefa:</p>
      <div className="form-control">
        <input
          type="text"
          id="todo-input"
          placeholder="O que você vai fazer?"
          autoComplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <i className="fa-regular fa-plus"></i>
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
