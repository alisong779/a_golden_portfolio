import React, { Component } from 'react'
import { deleteTask } from '../actions/tasksActions'
import { connect } from 'react-redux'
import { fetchGoal } from '../actions/goalsActions'
import Tasks from '../components/Tasks/Tasks';
import TaskInput from '../components/Tasks/TaskInput';

class TasksContainer extends Component {

  componentDidMount() {
    this.props.fetchGoal(this.props.goal.id)
  }

  render(){
    return(
      <div>
        <TaskInput
          goal={this.props.goal}
          />

        <strong>Goal Tasks:</strong>
        <Tasks
          key={this.props.goal.id}
          tasks={this.props.goal.tasks}
          deleteTask={this.props.deleteTask}
          goal={this.props.goal}
        />
        </div>
    )
  }
}


export default connect(null, { deleteTask, fetchGoal })(TasksContainer);
