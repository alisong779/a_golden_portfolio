import React from 'react';
import { NavLink } from 'react-router-dom';


const Goal = ({ title, deleteGoal, id }) => {
  return(
    <div className="goal">
      <NavLink key={id} to={`/goals/${id}/tasks`}><h3>{title}</h3></NavLink>
      <button className="delete-button" basic color='red' size='mini' onClick={() => deleteGoal(id)}>Delete</button>
    </div>
  )
}

export default Goal;
