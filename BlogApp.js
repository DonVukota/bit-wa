

const PostItem=(props)=>{
    const { title, body } = props.post;

   
   return(<div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              <p>{body}</p>
            </div>
        
          </div>
        </div>
      </div>
      )
   
    
}





const PostList=(props)=>{
    const posts = props.data

    return(
        posts.map((singlePost) => <PostItem post={singlePost} key={singlePost.id} />)
    )

}




const Main=(props)=>{
    const posts=props.data
    
    return (
        <div className="container">
        <PostList data={posts}/>
     
      </div>
   
     
    )
}


const Header=()=>{
    return(
    <nav>
        <div className="nav-wrapper">
             <a href="#" className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
           
             </ul>
         </div>
  </nav>
        
        

    )
}


const App =(props)=>{
const posts = props.posts



    return(
        <div>
            <Header />
            <Main data={posts}/>
        </div>
    )
}

 const gurniElement=document.querySelector('.opala')
ReactDOM.render(<App posts={posts} />, gurniElement)