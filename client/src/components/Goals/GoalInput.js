import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { addGoal } from '../../actions/goalsActions';
import { connect } from 'react-redux'


class GoalInput extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      count: 0
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGoal(this.state);
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    return(
      <Form className="new-goal-form" onSubmit={this.handleSubmit}>
        <h2 style={{fontSize: '50px', fontFamily: 'Big Shoulders Display'}}>React/Redux Goal Tracker</h2>
        <Form.Field>
          <label className="form-label">Goal Title</label>
          <input
            id="title"
            required value={this.state.title}
            onChange={(e) => this.handleChange(e)}
            />
        </Form.Field>

        <Form.Field>
          <label className="form-label">Description</label>
          <textarea
            id="description"
            required value={this.state.description}
            onChange={this.handleChange} />
        </Form.Field>

        <Button basic color='purple' type="submit">Add Goal</Button>
      </Form>

    )
  }
}

export default connect(null, { addGoal })(GoalInput);
