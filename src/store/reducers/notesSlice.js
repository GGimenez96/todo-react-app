import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            title,
            content,
          },
        };
      },
    },
    noteRemoved(state, action) {
      const { noteId } = action.payload;
      return state.filter((note) => note.id !== noteId);
    },
    noteUpdated: {
      reducer(state, action) {
        const { noteId, title, content, updated } = action.payload;
        const note = state.find((note) => note.id === noteId);
        if (note) {
          note.title = title;
          note.updated = updated;
          note.content = content;
        }
      },
      prepare(title, content, noteId) {
        return {
          payload: {
            noteId,
            title,
            content,
            updated: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default notesSlice.reducer;

export const { noteAdded, noteRemoved, noteUpdated } = notesSlice.actions;
