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

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo> )=>{
            state.todos.push({...action.payload, isCompleted: false}) // task push korlam
        }
    }, 
})

// reducer gula shb export kore dite hobe
export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;