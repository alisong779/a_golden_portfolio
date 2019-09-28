import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react';
import Goals from '../components/Goals/Goals'
import GoalInput from '../components/Goals/GoalInput'
import { fetchGoals } from '../actions/goalsActions'


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
          <Goals goals={this.props.goals} />
        </Container>
      )
    }
  }

const mapStateToProps = (state) => {
  return ({
    goals: state.goalReducer.goals
  })
}

export default connect(mapStateToProps, { fetchGoals })(GoalsContainer);
