import React from 'react';

const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    setTaskList(currentTaskList => currentTaskList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='max-w-xl flex flex-col items-center justify-center border rounded-lg py-1.5 px-2.5 text-lg'>
        <p>{task}</p>
        <button
          className='bg-red-500 text-white rounded-lg py-1 px-2 mt-2'
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
