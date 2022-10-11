const URL = 'http://localhost:3001';

export const postUpdateTodoList = async ( todo ) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });
  return await response.json();
}

export const loadTodoList = async () => {
  const response = await fetch(URL);
  return await response.json();
}
