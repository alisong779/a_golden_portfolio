import React, { Component } from 'react';
import { connect } from 'react-redux'
import Goal from './Goal'
import { Container } from 'semantic-ui-react';


const Goals = props => {
  const goalsList = props.goals.map(goal => <Goal key={goal.id} goal={goal} {...goal} deleteGoal={props.deleteGoal}/>)
  return (
    <Container>
      <h1>My Developer Goals</h1>
      {goalsList}
    </Container>
  )
}

export default Goals;
