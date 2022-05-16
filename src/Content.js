import useFetch from './useFetch';
import { useLocation } from 'react-router-dom';
import "./Content.css"
import { useEffect, useState } from 'react';
const Content = ({contentWidth}) => {
    let location= useLocation();
    const { joke, isPending, error}= useFetch(`https://v2.jokeapi.dev/joke${ location.pathname === '/'? '/Programming' : location.pathname }?amount=4`)
    const handleMode= ()=>{
        console.log("Set Mode");
      }
      const handleRefresh= ()=>{
        window.location.reload(false)
      }      
    return ( 
        <div style={contentWidth} className="content">
            <div className="top">
                <h1 className="category" > {location.pathname === '/'? 'Programming' : location.pathname.slice(1) } Jokes</h1>
                <div onClick={handleMode} className="mode" >Safe Mode</div>
            </div>
            {error && <h1>{error}</h1> }
            {isPending && <h1>Loading....</h1> }
            <div className="joke_container" >
            {joke && joke.jokes.map((joke)=>(
                <div key={joke.id}> 
                    {joke.type === "single" ? (
                    <div className="single_joke joke">
                        <h1> Single: </h1> 
                        <p>{joke.joke} </p>
                    </div>
                    ) : (
                    <div className="twopart_joke">
                        <div className="setup joke">
                            <h1>Setup :</h1> 
                            <p>{joke.setup}</p>
                        </div>
                        <div className="delivery joke">
                            <h1>Delivery: </h1>
                            <p>{joke.delivery}</p>
                        </div>
                    </div>) }
                </div>
            ))}
            </div>
            {!isPending && <div onClick={handleRefresh} className="refresh" >Refresh</div>}
      </div>            
     );
}
 
export default Content;