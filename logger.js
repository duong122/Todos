
export default function logger(reducer) {
    return (prevState ,state, action, args) => {
        console.group(state)
        console.log('Previous State: ', prevState)
        console.log('Action argument: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('Next state: ', nextState)  
        console.groupEnd()
        return nextState  
    }
}