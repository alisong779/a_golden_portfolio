import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';


const Task = ({ task, deleteTask, goal }) => {
  return(

    <Card>
    <Card.Content>
      <Card.Description>
        {task.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button basic color='grey' size='mini' variant="primary" onClick={() => deleteTask(task, goal)}>Delete</Button>
    </Card.Content>
  </Card>

  )
}

export default Task;
