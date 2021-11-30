<script>
  import { getContext } from 'svelte';
  import { readTodos } from '../helpers/apiRequests';

  export let refresh = getContext('refresh');
  let toggleRefresh = getContext('toggleRefresh');

  let todos = [],
    pending = [],
    completed = [];

  const getTodos = async () => {
    const res = await readTodos();
    if (res.message === 'successfully') {
      todos = res.data;
      pending = todos.filter((todo) => !todo.completed);
      completed = todos.filter((todo) => todo.completed);
    }
  };
  //  getTodos();
  $: {
    console.log('in lists - refresh:', refresh);
  }
</script>

<h3 class="text-center my-5">Pending</h3>
<ol>
  {#each pending as todo}
    <li>{todo.title}</li>
  {/each}
</ol>

<h3 class="text-center my-3">Completed</h3>
<ol>
  {#each completed as todo}
    <li>{todo.title}</li>
  {/each}
</ol>
