import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
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
          <Card.Description>
            {goal.title}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <button onClick={ () => this.handleClick() }>Delete Goal</button>
          <TasksContainer goal={goal} />
        </Card.Content>
      </Card>

      )
    }
  }
export default Goal;
