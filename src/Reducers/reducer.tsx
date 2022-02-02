export const initialState={
    name: 'farrukh',
    age: 20
}

export type actionType={
    type: 'CHANGE_NAME'
    payload: string
} | {
    type: 'UPDATE_AGE'
    payload: number
}

export const reducer=(state: typeof initialState, action: actionType)=>{
    if(action.type==="CHANGE_NAME"){
        return{
            ...state,
            name: action.payload
        }
    }
    if(action.type==="UPDATE_AGE"){
        return{
            ...state,
            age: action.payload
        }
    }
    return state
}