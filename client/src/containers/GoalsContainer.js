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
          <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal}/>
        </Container>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goalsData
  }
}

// 
// const mapDispatchToProps = dispatch => ({
//   fetchGoals: () => dispatch(fetchGoals()),
//   deleteGoal: id => dispatch(deleteGoal(id))
// })

export default connect(mapStateToProps, { fetchGoals, deleteGoal })(GoalsContainer);
