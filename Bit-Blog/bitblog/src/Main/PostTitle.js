import React from 'react';
import { Link } from 'react-router-dom'
const PostTitle = () => {
    return (
        <div className='container'>
            <h1 className='post-title'>Post title</h1>
          <Link to='/Autor'>  <h2 className='autor'>Autor name</h2></Link>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi et voluptatem
            quibusdam molestias rerum modi inventore, ipsam quos voluptas dolorum, sint explicabo!
         Rem provident quos, molestias dolor explicabo doloremque asperiores!</p>
            <hr />
                <h3>3 more post from same autor</h3>
            <div> 
            <li><a className="grey-text text" href="#!">Link 1</a></li>
            <li><a className="grey-text text" href="#!">Link 2</a></li>
            <li><a className="grey-text text" href="#!">Link 3</a></li>
        </div>
        </div>   

    )
}

export default PostTitle