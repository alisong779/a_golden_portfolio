import React, { Component } from 'react'
import { addTask, deleteTask } from '../actions/tasksActions'
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
        <Tasks
          key={this.props.goal.id}
          tasks={this.props.goal.tasks}
          deleteTask={this.props.deleteTask}
        />
      <TaskInput
        goal={this.props.goal}
        addTask={this.props.addTask}
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks.tasksData
})

// const mapDispatchToProps = dispatch => ({
//   fetchGoalTasks: goalId => dispatch(fetchGoalTasks(goalId)),
//   fetchGoal: goalId => dispatch(fetchGoal(goalId)),
//   addTask: (taskInput, goalId) => dispatch(addTask(taskInput, goalId)),
//   deleteTask: taskId => dispatch(deleteTask(taskId))
// })

export default connect(mapStateToProps, { addTask, deleteTask, fetchGoal })(TasksContainer);
