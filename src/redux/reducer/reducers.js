const initialInput = {
  todoList: [],
  user: null,
};

const todoReducers = (state = initialInput, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.data],
      };
    case "SET_TODO":
      return {
        ...state,
        todoList: action.data,
      };

    case "DELETE_TODO":
      const newTodoList = state.todoList.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        todoList: newTodoList,
      };

    case "ADD_USER":
      return {
        ...state,
        todoList: state.todoList,
        user: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        todoList: state.todoList,
        user: null,
      };
     
     
    default:
      return state;
  }
};

export default todoReducers;
