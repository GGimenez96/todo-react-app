import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    created: new Date().toISOString(),
    done: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    created: new Date().toISOString(),
    done: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    created: new Date().toISOString(),
    done: false,
  },
];

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
            title,
            done: false,
          },
        };
      },
    },
  },
});

export default todosSlice.reducer;

export const { todoAdded } = todosSlice.actions
