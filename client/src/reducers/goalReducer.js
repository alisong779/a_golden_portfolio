export default function goalReducer(state = {
  loading: false,
  goalsData: [],
}, action) {
  switch(action.type){
        case 'CREATE_GOAL':
          return {...state, goalsData:[...state.goalsData, action.payload]}
        case 'LOADING_GOALS':
        console.log('loading goals reducer')
          return {...state, loading: true}
        case 'FETCH_GOALS':
          console.log('fetch goals reducer')
          return {...state, loading: false, goalsData: action.payload}
        case 'DELETE_GOAL':
          return{...state, loading: false, goalsData: state.goalsData.filter(goal => goal.id !== action.payload.id)}

        default:
          return state;
      }
    }
