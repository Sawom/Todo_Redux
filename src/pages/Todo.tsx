import TodoContainer from '@/components/todo/TodoContainer';
import Container from '@/components/ui/Container';
import React from 'react';

const Todo = () => {
    return (
        <Container>
            <h1 className='text-center text-3xl font-semibold my-5'>my todos</h1>
            <TodoContainer></TodoContainer>
        </Container>
    );
};

export default Todo;