import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react';
import Goals from '../components/Goals/Goals'
import GoalInput from '../components/Goals/GoalInput'
import { fetchGoals, deleteGoal } from '../actions/goalsActions'


  class GoalsContainer extends Component {
    componentDidMount(){
      this.props.fetchGoals()
    }

    render() {
      return (
        <Container>
          <GoalInput />
          <br/>
          <hr/>
          {console.log(this.props.goals)}
          <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal}/>
        </Container>
      )
    }
  }

const mapStateToProps = (state) => {
  return ({
    goals: state.goalReducer.goals
  })
}

export default connect(mapStateToProps, { fetchGoals, deleteGoal })(GoalsContainer);
