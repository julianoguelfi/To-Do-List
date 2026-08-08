import { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import EditForm from "./components/EditForm";
import TodoList from "./components/TodoList";
import TodoProgress from "./components/TodoProgress";
import ConfirmDialog from "./components/ConfirmDialog";
import { FaReact } from "react-icons/fa";

import "./styles/todolist.css";

function App() {
  const { todos, addTodo, toggleDone, removeTodo, editTodo } = useTodos();
  const [editingTodo, setEditingTodo] = useState(null); // null = não está editando
  const [todoToDelete, setTodoToDelete] = useState(null); // tarefa aguardando confirmação

  const handleStartEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  const handleSaveEdit = (newText) => {
    editTodo(editingTodo.id, newText);
    setEditingTodo(null);
  };

  const handleConfirmDelete = () => {
    removeTodo(todoToDelete.id);
    setTodoToDelete(null);
  };

  // Números derivados do array `todos` — não precisam de estado próprio,
  // são recalculados a cada renderização a partir do que já existe.
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <>
      <div className="todo-container">
        <header>
          <h1>Lista de Tarefas</h1>
          <p className="subtitle">Organize seu dia, uma tarefa por vez</p>
        </header>

        {!editingTodo && (
          <TodoProgress completed={completedCount} total={totalCount} />
        )}

        {editingTodo ? (
          <EditForm
            initialValue={editingTodo.text}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <TodoForm onAdd={addTodo} />
            <TodoList
              todos={todos}
              onToggleDone={toggleDone}
              onEdit={handleStartEdit}
              onRequestRemove={setTodoToDelete}
            />
          </>
        )}
      </div>
        <footer>
          <p> Desenvolvido por Juliano Guelfi &reg; </p> <p>Criado com React{" "} <FaReact /></p>
        </footer>

      {todoToDelete && (
        <ConfirmDialog
          title="Excluir tarefa?"
          description={`"${todoToDelete.text}" será removida permanentemente.`}
          onConfirm={handleConfirmDelete}
          onCancel={() => setTodoToDelete(null)}
        />
      )}
    </>
  );
}

export default App;
