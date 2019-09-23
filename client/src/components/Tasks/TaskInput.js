import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchGoals } from '../../actions/goalsActions'


class TaskInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTask({name: this.state.name}, this.props.goal.id)

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <Form className="new-task-form" onSubmit={(e) =>this.handleSubmit(e)}>
       <Form.Field>
         <label className="form-label">Add Task</label>
         <input id="name" required value={this.state.name} onChange={(e) => this.handleChange(e)} />
       </Form.Field>
       <Button basic color='purple' type="submit">Add Task</Button>
       <hr/>
     </Form>
    )
  }
}

export default connect(null, { fetchGoals })(TaskInput)
