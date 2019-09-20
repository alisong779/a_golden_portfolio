import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import TasksContainer from '../../containers/TasksContainer'


  class Goal extends Component {
    handleClick(){
      this.props.deleteGoal(this.props.goal.id)
    }

    render(){
      const { goal } = this.props

      return (
        <Card>
        <Card.Content>
          {goal.id}.
          {goal.title}
        <br/>
          {goal.description}
        <br/>
        <br/>
          <button onClick={ () => this.handleClick() }>Delete Goal</button>
        </Card.Content>
        <br/>
        <Card.Content extra>
          <TasksContainer goal={goal}/>
        </Card.Content>
      </Card>

      )
    }
  }
export default Goal;
