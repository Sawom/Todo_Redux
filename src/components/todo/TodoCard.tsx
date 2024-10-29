import React from 'react';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/features/hoks';
import { removeTodo, toogleComplete } from '@/redux/features/todoSlice';

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}



const TodoCard = ({title, description, id, isCompleted}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toogleState =()=>{
    dispatch(toogleComplete(id));
  }

  return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
          <input  onChange={toogleState} type="checkbox" name="" id="" />
          <p>{title}</p>
          {/* <p>Time</p> */}
          <div>{isCompleted? <p className='text-green-500 font-bold' >Done</p> : 'pending'} </div>
          <p>{description}</p>

          <div className="space-x-5">
            <Button  onClick={()=> dispatch(removeTodo(id)) } className='bg-red-500'>del</Button>
            <Button>edit</Button>
          </div>
        </div>
    );
};

export default TodoCard;