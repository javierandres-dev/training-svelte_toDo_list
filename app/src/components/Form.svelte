<script>
  import { v4 as uuidv4 } from 'uuid';
  import { createTodo } from '../helpers/apiRequests';

  export let getTodos;

  let todo = {
    id: uuidv4(),
    title: '',
    completed: false,
    timestamp: '',
  };

  const resetTodo = () => {
    todo = {
      id: uuidv4(),
      title: '',
      completed: false,
      timestamp: '',
    };
  };

  const handleSubmit = async () => {
    const date = new Date();
    todo.timestamp = date.toISOString();
    const res = await createTodo(todo);
    if (res.message === 'successfully') getTodos();
    resetTodo();
  };
</script>

<form
  class="row align-items-center mt-5"
  on:submit|preventDefault={handleSubmit}
>
  <div class="col-10">
    <label class="" for="title">To Do</label>
    <input
      type="text"
      class="form-control"
      id="title"
      bind:value={todo.title}
    />
  </div>
  <div class="col-2">
    <button type="submit" class="btn btn-primary mt-4">Add</button>
  </div>
</form>
