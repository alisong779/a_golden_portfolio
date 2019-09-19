import React, { Component } from 'react'
import { addTask, deleteTask, fetchGoalTasks } from '../actions/tasksActions'
import { connect } from 'react-redux'
import { fetchGoal } from '../actions/goalsActions'
import Tasks from '../components/Tasks/Tasks';
import TaskInput from '../components/Tasks/TaskInput';

class TasksContainer extends Component {
  componentDidMount() {
    this.props.fetchGoalTasks(this.props.match.params.goalId)
    this.props.fetchGoal(this.props.match.params.goalId)
  }

  render(){
    const goalId = this.props.match.params.goalId
    return(
      <div>
        <Tasks
          key={this.props.goal.id}
          goal={this.props.goal}
          tasks={this.props.tasks}
          deleteTask={this.props.deleteTask}
        />
        <TaskInput addTask={this.props.addTask} goalId={goalId}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  tasks: state.tasks.taskData,
  goal: state.goals.goalData
})

const mapDispatchToProps = dispatch => ({
  fetchGoalTasks: goalId => dispatch(fetchGoalTasks(goalId)),
  fetchGoal: goalId => dispatch(fetchGoal(goalId)),
  addTask: (taskInput, goalId) => dispatch(addTask(taskInput, goalId)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);
