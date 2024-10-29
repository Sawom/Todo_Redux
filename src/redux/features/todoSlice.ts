import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// todo er task gular type define korlam
type TTodo ={
    id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
}

type TinitialState ={
    todos: TTodo[];
}

const initialState : TinitialState = {
    todos: [],
};

// prottek action er jnno Slice e 1ta kore reducer hobe
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo> )=>{
            state.todos.push({...action.payload, isCompleted: false}) // task push korlam
        },
        // id diye filter kore remove korbo. obj ashbe na, id string hisebe ashbe
        // filter notun ary return kore but eta set korte hobe. nahole delete hobe na
        removeTodo: (state, action: PayloadAction<string>)=>{
            state.todos = state.todos.filter( (item)=> item.id !== action.payload )
        }

    }, 
})

// reducer gula shb export kore dite hobe
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;