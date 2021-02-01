import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            title,
            done: false,
          },
        };
      },
    },
    markedAsDone(state, action) {
      const { todoId } = action.payload;
      const todo = state.find((todo) => todo.id === todoId);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    todoRemoved(state, action) {
      const { todoId } = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    todoUpdated: {
      reducer(state, action) {
        const { todoId, title, updated } = action.payload;
        const todo = state.find((todo) => todo.id === todoId);
        if (todo) {
          todo.title = title;
          todo.updated = updated;
        }
      },
      prepare(title, todoId) {
        return {
          payload: {
            todoId,
            title,
            updated: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default todosSlice.reducer;

export const {
  todoAdded,
  markedAsDone,
  todoRemoved,
  todoUpdated,
} = todosSlice.actions;
