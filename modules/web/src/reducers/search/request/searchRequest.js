export default (state = {} ,action) => {
    switch (action.type) {
        case 'START_DATE':
            return {...state, startDate:action.startDate};
        case 'END_DATE':
            return {...state, endDate:action.endDate};
        default:
            return state
    }
}