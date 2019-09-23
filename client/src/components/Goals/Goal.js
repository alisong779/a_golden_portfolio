import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import TasksContainer from '../../containers/TasksContainer'
import { connect } from 'react-redux'


  class Goal extends Component {
    handleClick(){
      this.props.deleteGoal(this.props.goal.id)
    }

    render(){
      const { goal } = this.props

      return (
        <Card >
        <Card.Content >
          <strong>Goal: {goal.title}</strong>
        <br/>
          Description: {goal.description}
        <br/>
        <br/>
          <Button basic color='grey' size='mini' variant="primary" onClick={ () => this.handleClick() }>Delete Goal</Button>
        </Card.Content>
        <br/>
        <Card.Content extra>
          <TasksContainer goal={goal}/>
        </Card.Content>
      </Card>
      )
    }
  }

  const mapStateToProps = (state) => ({
    goals: state.goals
  })


export default connect(mapStateToProps)(Goal);
