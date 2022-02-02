import { createContext, useReducer} from 'react';
import './App.css';
import Profile from './components/Profile';
import Todo from './components/Todo';
import User from './components/User';
import { initialState, reducer, actionType } from './Reducers/reducer';



type ctxType={
  state: typeof initialState,
  dispatch: React.Dispatch<actionType>
}
export const UserContext= createContext({} as ctxType)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {/* <Profile age= {10} status= 'single'/>
      <Profile name= 'hammad' age= {10} status= 'single'/>
      <Profile name= 'shariq' age= {15} status= 'commited'/>
      <Profile name= 'farrukh' age= {20} status= 'coder'/>
      <Profile name= 'suresh' age= {10} status= 'single'>
        <span style={{color: "green"}}>salary 50000rs</span>
      </Profile> */}
      {/* <Todo/> */}
      <User/>

    </UserContext.Provider>
  )
}

export default App;
