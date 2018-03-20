import React from 'react';
import User from '../../entites/User'
import UserCardItem from '../users/UserCardItem'
import GridView from "../users/UserListItem"

const UsersList=(props)=>{
    
    return (
        <ul className="collection">
        {props.data.map((singleUser,i) => {
            return props.isGrid ?
            <UserCardItem key={i} user={singleUser} />:
            <GridView key={i} user={singleUser} />}
        )} </ul>

       
)}
export default UsersList;