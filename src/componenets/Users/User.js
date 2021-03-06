import React, { Component } from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'

const User = ({users,loading}) => {
        if(loading){
            return <Spinner/>        
        }
        else{
            return (
                <div style={userStyle}>
                   {users.map(user => (
                      <Useritem key={user.id} user={user}/>
                   ))} 
                </div>
            )
        }
}

const userStyle = {
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default User
