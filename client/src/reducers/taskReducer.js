export default function tasksReducer(state = {
  loading: false,
  taskData: [],
  tasksData: []
},action){
  switch(action.type){
    case 'FETCH_TASKS':
      return {...state, tasksData: action.payload.tasks}
    case 'LOADING_TASKS':
      return {...state, loading: true}
    case 'CREATE_TASK':
      return {...state, tasksData:[...state.tasksData, action.payload.task]}
    case 'DELETE_TASK':
      return {...state, loading: false, tasksData: state.tasksData.filter(task => task.id !== action.payload.id )}

    default:
      return state;
    }
}
