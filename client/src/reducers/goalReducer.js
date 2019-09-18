export default function goalReducer(state = {
  loading: false,
  goalsData: [],
  goalData: []
}, action) {
  switch(action.type){
        case 'CREATE_GOAL':
          return {...state, goalsData:[...state.goalsData, action.payload]}
        case 'LOADING_GOALS':
          return {...state, loading: true}
        case 'FETCH_GOALS':
          return {...state, loading: false, goalsData: action.payload}
        case 'FETCH_GOAL':
          return {...state, loading: false, goalData: action.payload}
        case 'DELETE_GOAL':
          return{...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}

        default:
          return state;
      }
    }
