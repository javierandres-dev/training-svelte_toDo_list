const url = 'http://localhost:4000/todos';

export const createTodo = async (obj) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) return { message: 'successfully' };
    throw new Error(res.statusText || 'create todo fail');
  } catch (error) {
    return { message: error };
  }
};

export const readTodos = async () => {
  try {
    const res = await fetch(url);
    if (res.ok) return { message: 'successfully', data: await res.json() };
    throw new Error(res.statusText || 'read todos fail');
  } catch (error) {
    return { message: error };
  }
};

export const readTodo = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`);
    if (res.ok) return { message: 'successfully', data: await res.json() };
    throw new Error(res.statusText || 'read todo fail');
  } catch (error) {
    return { message: error };
  }
};

export const updateTodo = async (obj) => {
  try {
    const res = await fetch(`${url}/${obj.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) return { message: 'successfully', data: await res.json() };
    throw new Error(res.statusText || 'update todo fail');
  } catch (error) {
    return { message: error };
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) return { message: 'successfully' };
    throw new Error(res.statusText || 'delete todo fail');
  } catch (error) {
    return { message: error };
  }
};
