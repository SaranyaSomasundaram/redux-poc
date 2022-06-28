const initialState = { counter: 0, name: "" }
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + 1 };
        case "addname":
            return { ...state, name: action.name };

        case "decrement":
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}


export default counter;