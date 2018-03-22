import React from 'react'

const MovieCard = (props) => {
    const name = props.shows.name;
    const id = props.shows.id;
    // const image = props.show.image.medium;
    console.log(props)
    return (
      <div className="card" style={{width:"250px"}} >
       <img className="card-img-top" src={props.shows.image} alt="Card image cap"/>
      <div className="card-body">
        <p className="card-text">{props.shows.name}</p>
      
      </div>
    </div>
    )
}
    
export default MovieCard;