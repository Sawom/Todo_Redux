import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="mb-5 p-4 flex justify-between">
        
        <AddTodoModal></AddTodoModal>
        <Button>Filter</Button>
      </div>

      <div className="bg-blue-400 w-full h-full p-5 rounded-xl space-y-5">
        {/* <div className="bg-white font-bold text-xl p-3 flex justify-center items-center" >
            <p> There is no task pending</p>
        </div> */}
        
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
      </div>
    </div>
  );
};

export default TodoContainer;
