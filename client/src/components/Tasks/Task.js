import React from 'react';
import { Button, Card } from 'semantic-ui-react';


const Task = ({ task, deleteTask }) => {
  return(
    <Card>
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Description>
        {task.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button variant="primary" onClick={() => deleteTask(task.id)}>Delete</Button>
    </Card.Content>
  </Card>
  )
}

export default Task;
