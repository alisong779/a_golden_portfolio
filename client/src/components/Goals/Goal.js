import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import TasksContainer from '../../containers/TasksContainer'
import { connect } from 'react-redux'
import { deleteGoal } from '../../actions/goalsActions'


  class Goal extends Component {
    handleClick(){
      this.props.deleteGoal(this.props.goal.id)
    }

    render(){
      const { goal } = this.props

      return (
        <Grid >
          <Grid.Column>
            <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
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
              <br></br>
          </Card>
        </Grid.Column>
      </Grid>
      )
    }
  }


  // const mapStateToProps = (state) => ({
  //   goals: state.goals
  // })


export default connect(null, { deleteGoal })(Goal);
