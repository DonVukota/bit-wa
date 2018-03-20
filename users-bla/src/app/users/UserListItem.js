import React from 'react'


const GridView = (props) => {
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
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={props.user.picture.large} />
              <span className="card-title"> {props.user.name.first} {props.user.name.last}</span>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default GridView;