import './App.css';
import "./Sidebar"
import { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import useFetch from './useFetch';

function App() {
  const [contentWidth, setContentWidth]= useState()
  const { joke, isPending, error}= useFetch("https://v2.jokeapi.dev/joke/Programming?amount=3")
  console.log( "Pending", isPending, "Error", error );
  
  
  return (
    <>
    <div className="home">
      <Sidebar setContentWidth={setContentWidth} />
      <div style={contentWidth} className="content">
        <h1>I got jokes</h1>
        {error && <h1>{error}</h1> }
        {isPending && <h1>Loading....</h1> }
        {joke && joke.jokes.map((joke)=>(
           <div key={joke.id}> 
              {joke.type == "single" ? (
                <>
                 <h1> Single: {joke.joke} </h1>
                </>
              ) : (<>
                  <h1>Setup : {joke.setup}</h1>
                  <h1>Delivery: {joke.delivery}</h1>
              </>) }
           </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
