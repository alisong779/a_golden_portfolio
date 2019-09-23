let newGoal
export default function goalReducer(state = {
  goals: [],
  loading: false

}, action) {
  switch(action.type){
        case 'CREATE_GOAL':
          return {...state, goals:[...state.goals, action.payload]}
        case 'LOADING_GOALS':
        console.log('loading goals reducer')
          return {...state, loading: true}
        case 'FETCH_GOALS':
          console.log('fetch goals reducer')
          return {...state, loading: false, goals: action.payload}
        case 'DELETE_GOAL':
          return{...state, loading: false, goals: state.goals.filter(goal => goal.id !== action.payload.id)}
        case 'FETCH_TASKS':
          return {...state, tasks: action.payload.tasks}
        case 'LOADING_TASKS':
          return {...state, loading: true}

        case 'CREATE_TASK':
          newGoal = {...action.payload.goal, tasks: [...action.payload.goal.tasks, action.payload.task]}
          return {...state,
            goals: [...state.goals.filter(g => g.id !== action.payload.goal.id).concat(newGoal)]}

        case 'DELETE_TASK':
            newGoal =  {...action.payload.goal, tasks: action.payload.goal.tasks.filter(t => t.id !== action.payload.task.id)}
            return {...state,
              goals: [...state.goals.filter(g => g.id !== action.payload.goal.id).concat(newGoal)]}

        default:
          return state;
      }
    }
