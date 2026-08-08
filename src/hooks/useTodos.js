import { useState } from "react";

/**
 * Hook responsável por toda a "regra de negócio" da lista de tarefas.
 * A UI (componentes) só chama essas funções e renderiza `todos`.
 *
 * Diferença importante em relação à versão em JS puro:
 * cada tarefa agora tem um `id` único (Date.now()). No projeto original,
 * a edição encontrava a tarefa comparando o texto antigo (oldInputValue),
 * o que quebraria se você tivesse duas tarefas com o mesmo texto.
 * Usando id, isso não é mais um problema.
 */
export function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return { todos, addTodo, toggleDone, removeTodo, editTodo };
}
