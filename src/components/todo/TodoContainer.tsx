import { useAppSelector } from "@/redux/features/hoks";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("")
  // from local state
  // const {todos}= useAppSelector( (state)=> state.todos )

  // from server
  const {data: todos, isError, isLoading} = useGetTodosQuery(priority);

  console.log(todos);
  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className="mb-5 p-4 flex justify-between">
        
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority} ></TodoFilter>
      </div>

      <div className="bg-blue-400 w-full h-full p-5 rounded-xl space-y-5">
        {/* <div className="bg-white font-bold text-xl p-3 flex justify-center items-center" >
            <p> There is no task pending</p>
        </div> */}
        
        {
          todos?.data?.map( (item)=>(
            <TodoCard  {...item} ></TodoCard>
          ) )
        }
        
        
      </div>
    </div>
  );
};

export default TodoContainer;
