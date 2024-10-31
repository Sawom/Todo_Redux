import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/features/hoks";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodosMutation } from "@/redux/api/api";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  // dispatch
  // const dispatch = useAppDispatch(); local state er kaj korle tokhn dispatch korte hoy
  
  // for server
  // ary er 1st parameter hobe funtion, 2nd taa hobe obj
  const [addTodo, {data, isLoading, isError,isSuccess}] = useAddTodosMutation();
  console.log({data, isLoading, isError,isSuccess});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2,7) ;

    const taskDetails = {
        id: randomString,
        title:task,
        description:description,
    }
    //! for local state manage only dispatch used
    // dispatch(addTodo( taskDetails ));
    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add todo</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            {/* task */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                defaultValue=""
                className="col-span-3"
              />
            </div>
            {/* description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                defaultValue=""
                className="col-span-3"
              />
            </div>
          </div>
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;