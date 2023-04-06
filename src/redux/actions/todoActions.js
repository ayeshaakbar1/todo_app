export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    data: data,
  };
};
export const setTodo = (data) => {
  return {
    type: "SET_TODO",
    data: data,
  };
};

export const updateTodo = (id, data) => {
  return {
    type: "UPDATE_TODO",
    id: id,
    data: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};
export const addUser = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};
export const deleteUser = () => {
  return {
    type: "DELETE_USER",
  };
};
