import React from 'react'
const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a><i class="material-icons">refresh</i></a></li>
                <li><a onClick={props.viewChange}><i class="material-icons">view_module</i></a></li>
                </ul>
            </div>
        </nav>



    )
}
export default Header;