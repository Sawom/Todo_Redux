import React from 'react';
import { Button } from '../ui/button';

type TTodoCardProps = {
  title: string;
  description: string;
}

const TodoCard = ({title, description}: TTodoCardProps) => {
    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3">
          <input type="checkbox" name="" id="" />
          <p>{title}</p>
          {/* <p>Time</p> */}
          <p>{description}</p>

          <div className="space-x-5">
            <Button className='bg-red-500'>del</Button>
            <Button>edit</Button>
          </div>
        </div>
    );
};

export default TodoCard;