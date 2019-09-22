import React from 'react';
import { Button, Card } from 'semantic-ui-react';


const Task = ({ task, deleteTask }) => {
  return(
    <Card>
    <Card.Content>
      <Card.Description>
        {task.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='grey' size='mini' variant="primary" onClick={() => deleteTask(task.goal_id, task.id)}>Delete</Button>
    </Card.Content>
  </Card>
  )
}

export default Task;
