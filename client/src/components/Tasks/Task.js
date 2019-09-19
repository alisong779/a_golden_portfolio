import React from 'react';
import { Button, Card } from 'semantic-ui-react';


const Task = ({ name, deleteTask, id }) => {
  return(
    <Card>
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Description>
        {name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button variant="primary" className="delete-button" onClick={() => deleteTask(id)}>Delete</Button>
    </Card.Content>
  </Card>
  )
}

export default Task;
