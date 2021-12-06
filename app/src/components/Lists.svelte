<script>
  import Aside from './Aside.svelte';
  import Modal from './Modal.svelte';
  import {
    readTodo,
    updateTodo,
    deleteTodo,
  } from './../helpers/apiRequests.js';

  export let todos, getTodos;

  $: todoObj = null;
  $: pendingArr = todos.filter((todo) => !todo.completed);
  $: completedArr = todos.filter((todo) => todo.completed);
  $: toRemove = null;

  const detailsTodo = async (id) => {
    const res = await readTodo(id);
    if (res) todoObj = res.data;
    setTimeout(() => (todoObj = null), 4000);
  };

  const changeCompleted = async (id) => {
    const current = todos.find((item) => item.id === id);
    if (current) {
      const changed = { ...current, completed: !current.completed };
      const res = await updateTodo(changed);
      if (res.message === 'successfully') getTodos();
    }
  };

  const removeTodo = (id) => {
    const current = todos.findIndex((item) => item.id === id);
    if (current !== -1) toRemove = id;
  };

  const isRemove = async () => {
    const res = await deleteTodo(toRemove);
    if (res.message === 'successfully') getTodos();
  };
</script>

{#if pendingArr.length > 0}
  <h3 class="text-center my-5">Pending</h3>
  <ul>
    {#each pendingArr as todo, idx}
      <li class="d-flex justify-content-between my-1">
        <div>{idx + 1}. {todo.title}</div>
        <div class="btn-group btn-group-sm" role="group">
          <input
            type="checkbox"
            class="btn-check"
            id={`${idx}completed`}
            autocomplete="off"
            checked={todo.completed}
            on:click={() => changeCompleted(todo.id)}
          />
          <label class="btn btn-success" for={`${idx}completed`}
            >Completed</label
          >
          <button
            type="button"
            class="btn btn-secondary"
            on:click={() => detailsTodo(todo.id)}>Details</button
          ><button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#removeModal"
            on:click={() => removeTodo(todo.id)}>Remove</button
          >
        </div>
      </li>
    {/each}
  </ul>
{/if}

{#if completedArr.length > 0}
  <h3 class="text-center my-3">Completed</h3>
  <ul>
    {#each completedArr as todo, idx}
      <li class="d-flex justify-content-between my-1">
        <div>{idx + 1}. {todo.title}</div>
        <div class="btn-group btn-group-sm" role="group">
          <input
            type="checkbox"
            class="btn-check"
            id={`${idx}incomplete`}
            autocomplete="off"
            checked={todo.completed}
            on:click={() => changeCompleted(todo.id)}
          />
          <label class="btn btn-warning" for={`${idx}incomplete`}
            >Incomplete</label
          >
          <button
            type="button"
            class="btn btn-secondary"
            on:click={() => detailsTodo(todo.id)}>Details</button
          ><button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#removeModal"
            on:click={() => removeTodo(todo.id)}>Remove</button
          >
        </div>
      </li>
    {/each}
  </ul>
{/if}

{#if todoObj}
  <Aside {todoObj} />
{/if}

<Modal {isRemove} />
