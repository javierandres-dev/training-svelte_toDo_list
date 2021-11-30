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
    throw new Error(res.statusText || 'fail');
  } catch (error) {
    return { message: error };
  }
};

export const readTodos = async () => {
  try {
    const res = await fetch(url);
    if (res.ok) return { message: 'successfully', data: await res.json() };
    throw new Error(res.statusText || 'fail');
  } catch (error) {
    return { message: error };
  }
};
