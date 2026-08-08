import { useState } from "react";

/**
 * Recebe o texto atual da tarefa (initialValue) e mantém sua própria
 * cópia editável em estado local. Só "avisa" o componente pai (App)
 * quando o usuário salva ou cancela — o pai decide o que fazer com isso.
 */
function EditForm({ initialValue, onSave, onCancel }) {
  const [text, setText] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      onSave(text);
    }
  };

  return (
    <form id="edit-form" onSubmit={handleSubmit}>
      <p>Edite sua tarefa</p>
      <div className="form-control">
        <input
          type="text"
          id="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-check-double"></i>
        </button>
      </div>
      <button id="cancel-edit-btn" type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}

export default EditForm;
