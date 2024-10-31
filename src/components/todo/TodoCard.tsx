import { useUpdateTodosMutation } from "@/redux/api/api";
import { removeTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";

type TTodoCardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({
  title,
  description,
  _id,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  // const dispatch = useAppDispatch();

  const [updateTodo, { isLoading }] = useUpdateTodosMutation();

  const toogleState = () => {
    const taskData = {
      _id,
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: {
        title,
        description,
        priority,
        isCompleted: !isCompleted,
      },
    };
    // dispatch(toogleComplete(id));
    console.log(options);
    updateTodo(options);
  };

  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input
        className="mr-3"
        onChange={toogleState}
        type="checkbox"
        name="complete"
        id="complete"
        defaultChecked={isCompleted}
      />
      <p className="flex-1">{title}</p>
      {/* <p>Time</p> */}
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full 
          ${priority === "high" ? "bg-red-500" : null}
          ${priority === "medium" ? "bg-yellow-500" : null}
          ${priority === "low" ? "bg-green-500" : null}
        `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500 font-bold">Done</p>
        ) : (
          <p className="text-red-500 font-bold">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>

      <div className="space-x-5">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          del
        </Button>
        <Button>edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
