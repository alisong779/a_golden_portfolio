//ADD TASK
export const addTask = ( task, goal ) => {
  console.log('adding task')
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  }
  return dispatch => {
    fetch(`/api/goals/${goal.id}/tasks`, data)
      .then(response => response.json())
      .then(task => {
        let result = {task, goal}
        dispatch({
          type: 'CREATE_TASK',
          payload: result
        })
      })
      .catch(err => err)
  }
}

//DELETE TASK
export const deleteTask = ( task, goal ) => {
  console.log('deleting task')
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`api/goals/${goal.id}/tasks/${task.id}`, data)
      .then(response => response.json())
      .then(task => {
        let result = {task, goal}
        dispatch({
        type: 'DELETE_TASK',
        payload: result
      })
  })
    .catch(err => err)
}
}
