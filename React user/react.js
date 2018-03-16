




const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">


                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright Bit
            </div>
            </div>
        </footer>
    )
}

const PostUser = (props) => {
    const { name, email,dob, picture} = props.user;
    const slika = picture.medium
    const mail=email
    const datum=dob
    const ime=name.first
    return (
        <div>
            
            <li className="collection-item avatar">
                <img src={slika} alt="" className="circle" />
                <span className="title">Name:{ime}</span>
                <p>Email:{mail} <br />
                    date of birth:{datum}
                </p>
                 </li>
        </div>
    )
}




const PostUsers = (props) => {
    const user = props.users
   

    return (
        <ul class="collection">
            {user.map((singleUser) => <PostUser user={singleUser} />)}
        </ul>
    )
}


const Main = (props) => {
    const users = props.data
    return (
        <div className='container'>
            <PostUsers users={users}/>
        </div>

    )
}


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">

                </ul>
            </div>
        </nav>



    )
}


const App = (props) => {
    const users = props.usersData
    return (
        <div>
            <Header />
            <Main data={users} />
            <Footer />
        </div>
    )
}


const drugiElement = document.querySelector('.novo')
ReactDOM.render(<App usersData={usersData} />, drugiElement)