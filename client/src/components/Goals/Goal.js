import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Card } from 'semantic-ui-react';


const Goal = ({ title, description, deleteGoal, id }) => {
  return(
    <Card>
    <Card.Content>
      <Card.Header><NavLink key={id} to={`/goal/${id}/tasks`}>{title}</NavLink></Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button variant="primary" className="delete-button" onClick={() => deleteGoal(id)}>Delete</Button>
    </Card.Content>
  </Card>
  )
}

export default Goal;
