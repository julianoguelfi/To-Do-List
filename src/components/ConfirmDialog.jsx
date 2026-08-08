/**
 * Modal genérico de confirmação. Não sabe nada sobre "excluir tarefa"
 * especificamente — recebe título, descrição e as duas ações, então dá
 * pra reaproveitar em qualquer confirmação futura do app.
 */
function ConfirmDialog({ title = "Tem certeza?", description, onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-icon">
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>

        <h2>{title}</h2>
        {description && <p>{description}</p>}

        <div className="confirm-actions">
          <button className="confirm-cancel" type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button className="confirm-delete" type="button" onClick={onConfirm}>
            <i className="fa-regular fa-trash-can"></i>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
