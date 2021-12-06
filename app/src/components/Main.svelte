<script>
  import { readTodos } from '../helpers/apiRequests';
  import Form from './Form.svelte';
  import Lists from './Lists.svelte';

  $: todos = [];

  const getTodos = async () => {
    const res = await readTodos();
    if (res.message === 'successfully') todos = res.data;
  };
  getTodos();
</script>

<main role="main" class="container">
  <h2 class="text-center mt-5">My To Do List</h2>
  <Form {getTodos} />
  <Lists {todos} {getTodos} />
</main>
