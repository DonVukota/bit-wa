
import React from 'react'


const UserCardItem = (props) => {
    console.log(props.user);
    const email = props.user.email;
    const dateN = props.user.dob;
    const dateNew = (date) => {
        const newD = new Date(date);
        const yearD = newD.getFullYear();
        const monthD = newD.getMonth();
        const dayD = newD.getDay();

        return dayD + "-" + monthD + "-" + yearD;


    }
    const emailUpper = (mail) => {

        const slicedEmail = mail.slice(3, mail.indexOf("@") - 3);
        const slicedOutput = mail.replace(slicedEmail, "...");
        return slicedOutput;
    }
    return (
        <div>

            <li className="collection-item avatar">
                <img src={props.user.picture.large} alt="" className="circle" />
                <span className="title">Name: {props.user.name.first} {props.user.name.last}</span>
                <p>     <i className="material-icons " >email</i> Email: {emailUpper(email)}<br />
                    Date Of Birth: {dateNew(dateN)}
                </p>
            </li>
        </div>
    )
}


export default UserCardItem;

