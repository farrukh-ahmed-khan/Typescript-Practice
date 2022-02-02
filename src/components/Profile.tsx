import React from 'react'

type ProfileProps={
    name?:string /* define type */
    age: number
    status: 'coder' | 'single' | 'commited' /* define specifics values */
    children?: React.ReactNode /* if paas child between component tag for example div and span */
}
const profile = ({name,age,status,children}:ProfileProps) => {
    return (
        <div style={{border:" 2px black solid", margin:"2px"}}>
            <h1>Name: {name}</h1>
            <h2>age: {age}</h2>
            <h2>status: {status}</h2>
            <h3>{children}</h3>
        </div>
    )
}

export default profile
