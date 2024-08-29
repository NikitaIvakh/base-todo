import { RootState } from 'store/store'

export const selectAllTodos = (state: RootState) => state.todos
