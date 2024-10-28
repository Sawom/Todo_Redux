import React from 'react';

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add todo</button>
                <button>Filter</button>
            </div>
            <div className='bg-red-500 w-full h-[500px] p-5 rounded-xl'>
                <div className='bg-white' >
                    <input type="checkbox" name="" id="" />
                    <p>Todo Title</p>
                    <p>Time</p>
                    <p>Description</p>

                    <div>
                        <button>del</button>
                        <button>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;