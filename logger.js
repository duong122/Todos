export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Previous State: ', prevState)
        console.log('Action argument: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('Next state: ', nextState)
        console.groupEnd()
        return nextState
    }
}