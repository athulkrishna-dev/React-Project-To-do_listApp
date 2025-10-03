import React from 'react';

export const TodoList = ({ prop1 ,deleteHandler }) => {
  return (
    <div>
      {prop1.map((t, index) => (
        <div key={index}>
          <h2>
            {t} &nbsp; 
            <button onClick={()=>deleteHandler(index)}>Delete</button>
          </h2>
        </div>
      ))}
    </div>
  );
};
