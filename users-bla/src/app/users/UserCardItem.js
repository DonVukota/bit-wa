// import User from '../../entites/User';
import React from 'react'

const UserCardItem=(props)=>{
console.log(props.user);

    return(
        <div>
            
        <li className="collection-item avatar">
            <img src={props.user.picture.large} alt="" className="circle" />
            <span className="title">Name:{props.user.name.first}</span>
            <p>Email:{props.user.email} <br />
                date of birth:{props.user.dob}
            </p>
             </li>
    </div>
    )
}
export default UserCardItem;
