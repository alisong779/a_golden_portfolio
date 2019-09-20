import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'


class TaskInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      name : e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addTask({name: this.state.name}, this.props.goal.id);
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <Form className="new-task-form" onSubmit={(e) =>this.handleOnSubmit(e)}>
       <Form.Field>
         <label className="form-label">Add Task</label>
         <input id="name" required value={this.state.name} onChange={(e) =>this.handleChange(e)} />
       </Form.Field>
       <Button type="submit">Add Task</Button>
     </Form>
    )
  }
}

export default TaskInput
