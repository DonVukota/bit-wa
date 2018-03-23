import React from 'react'
import { Link } from 'react-router-dom'
const Autor = () => {
    return (
        <div className='container'>
            <div className=' AutorH'>

                <img src='http://via.placeholder.com/200x100' />

                <div className='AutorJ'>
                    <Link to='/'><p>GO back</p></Link>
                    <h2>Name Surname</h2>
                    <p>User Name:<br />
                        Email:<br />
                        Phone:<br />
                    </p>
                </div>
            </div>
            <hr />
            <br />
            <div className='AutorK'>
                <h2>Name Surname</h2>
                <p>Streat:<br />
                    City:<br />
                    Zip Code:<br />
                </p>
                <img className='slika' src='http://via.placeholder.com/200x100' />
            </div>
            <hr />
            <div className='AutorL'>
                <h3>Company</h3>
                <p>Name:<br />
                    Slogan:<br />
                </p>

            </div>
        </div>
    )

}
export default Autor