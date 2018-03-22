import React from 'react';
import Show from './../entities/show';
import MovieCard from '../movies/moviesCard';

const ShowList=(props)=>{
    console.log(props);
    
    const li = props.shows.slice(0,50).map((singleShow,i)=>{
            return <MovieCard key ={i} shows={singleShow}/>}
        )
        console.log(li)
    return (
        <div className='container'>
        <ul className='collection'>
        <div className='row'>
        
           {li}
        </div>
        
        </ul>
        </div>
    )
}



export default ShowList;