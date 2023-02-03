import { createSlice } from '@reduxjs/toolkit'

const taskInitialState = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Task description',
    completed: false
  }

]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: taskInitialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    }
  }
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer
