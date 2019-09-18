import React, { Component } from 'react';
import { connect } from 'react-redux'
import Goal from './Goal'


const Goals = props => {
  const goalsList = props.goals.map(goal => <Goal key={goal.id} goal={goal} {...goal} deleteGoal={props.deleteGoal}/>)
  return (

      <div>
        <h1> My Developer Goals</h1>
        {goalsList}
      </div>
  )
}

export default Goals;
