import React, { Component } from 'react'
import { connect } from 'react-redux'
import Goals from '../components/Goals/Goals'
import GoalInput from '../components/Goals/GoalInput'
import { fetchGoals, deleteGoal } from '../actions/goalsActions'


  class GoalsContainer extends Component {
    componentDidMount(){
      this.props.fetchGoals()
    }

    render() {
      return (
        <div>
          <GoalInput />
          <Goals goals={this.props.goals} deleteGoal={this.props.deleteGoal}/>
        </div>
      )
    }
  }

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goalsData
  }
}


const mapDispatchToProps = dispatch => ({
  fetchGoals: () => dispatch(fetchGoals()),
  deleteGoal: id => dispatch(deleteGoal(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer);
