export default (state = {} ,action) => {
    switch (action.type) {
        case 'START_DATE':
            return {...state, startDate:action.startDate};
        default:
            return state
    }
}