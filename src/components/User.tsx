import React, { useContext } from 'react'
import { UserContext } from '../App'



const User = () => {
    const {state, dispatch} = useContext(UserContext)
    return (
        <div>
            <h1>Name= {state.name}</h1>

            <h2>Age= {state.age}</h2>
            <button onClick={()=>{
                dispatch({type:"CHANGE_NAME", payload: "Hammad"})
            }}>Update Name
            </button>
            <button onClick={()=>{
                dispatch({type:"UPDATE_AGE", payload: 6})
            }}>Update Age
            </button>
        </div>
    )
}

export default User
