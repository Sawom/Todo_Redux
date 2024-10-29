import React from 'react';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/redux/features/hoks';
import { removeTodo } from '@/redux/features/todoSlice';

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
}

const TodoCard = ({title, description, id}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
          <input type="checkbox" name="" id="" />
          <p>{title}</p>
          {/* <p>Time</p> */}
          <p>{description}</p>

          <div className="space-x-5">
            <Button  onClick={()=> dispatch(removeTodo(id)) } className='bg-red-500'>del</Button>
            <Button>edit</Button>
          </div>
        </div>
    );
};

export default TodoCard;