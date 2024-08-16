import React, { useState } from 'react';

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {  // Verifica que no esté vacío
            setTaskList([...taskList, input]);
            setInput('');
        }
    };

    return (
        <>
            <form className="flex flex-row items-center gap-3" onSubmit={handleAddTask}>
                <input
                    className='border rounded-lg py-1.5 px-2.5 text-lg'
                    type="text"
                    placeholder='Add a task'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className='bg-violet-400 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-70' type="submit">Add</button>
            </form>
        </>
    );
};

export default Input;