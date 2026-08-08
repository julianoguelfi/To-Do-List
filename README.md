# To-Do List — versão React

Conversão do projeto original (HTML + CSS + JS puro) para React + Vite,
mantendo o mesmo visual e comportamento, mas com a lógica organizada em
componentes e um hook customizado.

## Estrutura

```
todolist-react/
├── index.html              # HTML raiz do Vite (só o <div id="root">)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx             # ponto de entrada, monta o <App />
    ├── App.jsx              # componente raiz: decide o que renderizar
    ├── hooks/
    │   └── useTodos.js      # toda a lógica de estado das tarefas
    ├── components/
    │   ├── TodoForm.jsx     # formulário de adicionar tarefa
    │   ├── EditForm.jsx     # formulário de editar tarefa
    │   ├── TodoList.jsx     # renderiza a lista a partir do array
    │   └── TodoItem.jsx     # uma tarefa individual (linha da lista)
    └── styles/
        └── todolist.css     # seu CSS original, sem alterações visuais
```

## Como o fluxo de dados funciona

1. `useTodos` guarda o array `todos` no estado e expõe funções
   (`addTodo`, `toggleDone`, `removeTodo`, `editTodo`).
2. `App` usa esse hook e decide **o que mostrar**: o formulário de
   adicionar tarefa (`TodoForm` + `TodoList`) ou o formulário de edição
   (`EditForm`), dependendo se existe uma tarefa em edição
   (`editingTodo`).
3. `TodoList` percorre o array e cria um `TodoItem` para cada tarefa.
4. `TodoItem` não guarda estado: ele só chama as funções que recebeu
   por props (`onToggleDone`, `onEdit`, `onRemove`) quando os botões
   são clicados.

## Principais diferenças em relação à versão em JS puro

- **Sem manipulação direta do DOM**: nada de `createElement`,
  `appendChild` ou `classList.toggle("hide")`. O React recria a UI
  a partir do estado (`todos`, `editingTodo`) a cada mudança.
- **Cada tarefa tem um `id`** (`Date.now()`), em vez de identificar a
  tarefa pelo texto. Isso evita bugs se duas tarefas tiverem o mesmo
  título — algo que existia na versão original (`updateTodo` comparava
  `todoTitle.innerText === oldInputValue`).
- **Formulários controlados**: o valor do `<input>` vive no estado do
  componente (`useState`), não é lido do DOM na hora do submit.

## Rodando o projeto

```bash
npm install
npm run dev
```

Depois é só abrir o endereço que o Vite mostrar no terminal
(geralmente `http://localhost:5173`).

## Próximos passos sugeridos

- Persistir as tarefas no `localStorage` (um bom exercício para
  praticar `useEffect`).
- Extrair a contagem de tarefas concluídas para um componente de
  resumo/estatística.
- Adicionar filtros (todas / pendentes / concluídas).
