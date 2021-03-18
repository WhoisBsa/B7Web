const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [], // 0-6 (Semana começa no Domingo)
  myWorkouts: [],
  lastWorkout: '', // ID
  dailyProgress: ['2020-12-21', '2020-12-20'],
};

export default (state = initialState, action) => {
  let myWorkouts = [...state.myWorkouts];
  let dailyProgress = [...state.dailyProgress];

  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
    case 'SET_LEVEL':
      return {...state, level: action.payload.level};
    case 'ADD_WORKOUT':
      if (myWorkouts.findIndex((i) => i.id === action.payload.workout.id) < 0) {
        myWorkouts.push(action.payload.workout);
      }
      return {...state, myWorkouts};
    case 'EDIT_WORKOUT':
      let index = myWorkouts.findIndex(
        (i) => i.id === action.payload.workout.id,
      );
      if (index > -1) {
        myWorkouts[index] = action.payload.workout;
      }
      return {...state, myWorkouts};
    case 'DEL_WORKOUT':
      myWorkouts = myWorkouts.filter((i) => i.id !== action.payload.workout.id);
      return {...state, myWorkouts};
    case 'ADD_PROGRESS':
      if (!dailyProgress.includes(action.payload.date)) {
        dailyProgress.push(action.payload.date);
      }
      return {...state, dailyProgress};
    case 'DEL_PROGRESS':
      dailyProgress = dailyProgress.filter((i) => i !== action.payload.date);
      return {...state, dailyProgress};
    case 'SET_LASTWORKOUT':
      return {...state, lastWorkout: action.payload.id};
    case 'RESET':
      return initialState;
    default:
      break;
  }

  return state;
};
