// reducer is func, initialState is object
const createStore = (reducer, initialState) => {
    let state = initialState;

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
    // saves counter number
        case 'PLUS_ONE_COUNTER':
            return {
            ...state,
            counter: action.payload,
        };        
        default:
            return state;
    }
  }



  // TEST RUN 
const initialState = { 
    name: 'Jason', 
    displayMode: 'light', 
    counter: 0
};
const store = createStore(reducer, initialState);

console.log(store.getState())

store.dispatch({
    type: 'SET_USER_NAME',
    payload: 'Dave',
});

console.log(store.getState())


store.dispatch({
    type: 'SET_DISPLAY_MODE',
    payload: 'dark',
});

console.log(store.getState())


const counterBtn = document.getElementById('counter')

counterBtn.innerHTML = store.getState().counter

counterBtn.addEventListener('click', () => {
    store.dispatch({
        type: 'PLUS_ONE_COUNTER',
        payload: store.getState().counter + 1
    })
    counterBtn.innerHTML = store.getState().counter
    console.log(store.getState())
})









