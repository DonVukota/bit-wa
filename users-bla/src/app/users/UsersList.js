import React from 'react';
import User from '../../entites/User'
import UserCardItem from '../users/UserCardItem'

const UsersList=(props)=>{
    
    return (
        <ul className="collection">
        {props.data.map((singleUser,i) => <UserCardItem user={singleUser} key={i} />)}
    </ul>

    )
}
export default UsersList;