import testTypes from './test.types'

const INITIAL_STATE = {
    test: []
}

const testReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case testTypes.SET_TEST:
        return {
            ...state,
            test: action.payload
        }        

    default:
        return state
}
}

export default testReducer