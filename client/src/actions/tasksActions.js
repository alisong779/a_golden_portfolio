//ADD TASK

export const addTask = ( task, id ) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  }
  return dispatch => {
    fetch(`/api/goals/${id}/tasks`, data)
      .then(response => response.json())
      .then(task => {
        let result = {task, id}
        dispatch({type: 'CREATE_TASK', payload: result})
      })
      .catch(err => err)
  }
}

//DELETE TASK
export const deleteTask = ( goalId, id ) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  return dispatch => {
    fetch(`api/goals/${goalId}/tasks/${id}`, data)
      .then(response => response.json())
      .then(task => dispatch({
        type: 'DELETE_TASK',
        payload: task
      }))
      .catch(err => err)
  }
}


//
// //GOAL TASKS
// export const fetchGoalTasks = goalId => {
//   console.log('fetching goal tasks', goalId)
//   return dispatch => {
//     fetch(`/api/goals/${goalId}/tasks`)
//       .then(response => response.json())
//       .then(tasks => {
//         let result = {
//           tasks,
//           goalId
//         }
//         dispatch({
//             type: 'FETCH_TASKS',
//             payload: result
//         })
//       })
//       .catch(err => err)
//   }
// }
