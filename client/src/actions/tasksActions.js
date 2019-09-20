
//GOAL TASKS
export const fetchGoalTasks = goalId => {
  console.log('fetching goal tasks', goalId)
  return dispatch => {
    fetch(`/api/goals/${goalId}/tasks`)
      .then(response => response.json())
      .then(tasks => {
        let result = {
          tasks,
          goalId
        }
        dispatch({
            type: 'FETCH_TASKS',
            payload: result
        })
      })
      .catch(err => err)
  }
}


//ADD TASK

export const addTask = ( taskInput, goalId ) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(taskInput)
  }
  return dispatch => {
    fetch(`/api/goals/${goalId}/tasks`, data)
      .then(response => response.json())
      .then(task => {
        let result = {task, goalId}
        dispatch({type: 'CREATE_TASK', payload: result})
      })
      .catch(err => err)
  }
}

//DELETE TASK
export const deleteTask = id => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`/tasks/${id}`, data)
      .then(response => response.json())
      .then(task => dispatch({
        type: 'DELETE_TASK',
        payload: task
      }))
      .catch(err => err)
  }
}
