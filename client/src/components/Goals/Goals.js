import React, { Component } from 'react';
import Goal from './Goal'


class Goals extends Component {
  render() {
    const { goals, deleteGoal } = this.props

    const goalsIndex = goals.map(goal => {
      return (
        <Goal key={goal.id} goal={goal} deleteGoal={deleteGoal}/>
      )
  })
    return (

      <ul>
        <h2 class="goalIndex">Goals List:</h2>
        {goalsIndex}
      </ul>

    )
  }
}
export default Goals;
