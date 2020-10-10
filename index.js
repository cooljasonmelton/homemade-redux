// reducer is func, initialState is object
const createStore = (reducer, initialState) => {
    const state = initialState;

    // return current state
    const getState = () => state;

    // change state w/ param {action: "", payload: ""}
    const dispatch = action => {
        state = reducer(state, action)

    }

    return { getState, dispatch };
};


// takes state {} and action {type: "STRING"}
const reducer = (state, action) => {
    switch (action.type) {
    // saves user name
      case 'SET_USER_NAME':
        return {
          ...state,
          name: action.payload,
        };
    // saves light or dark
      case 'SET_DISPLAY_MODE':
        return {
          ...state,
          displayMode: action.payload,
        };
      default:
        return state;
    }
  }