import React from 'react';
import { Link } from 'react-router-dom'

const HomeApp=()=>{
    return(


      <div className='container'>
      <h1 className='Post'>Posts</h1>
        <div>
            <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
         <Link to ='/PostTitle'> <span className="card-title">Title</span></Link>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi et voluptatem
               quibusdam molestias rerum modi inventore, ipsam quos voluptas dolorum, sint explicabo!
                Rem provident quos, molestias dolor explicabo doloremque asperiores!
          </p>
        </div>
      </div>
    </div>
  </div>
        </div>
        </div>

    )
}
export default HomeApp;