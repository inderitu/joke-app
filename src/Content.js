import "./Content.css"
import useFetch from './useFetch';
import useFont from "./useFont";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Content = ({contentWidth, setFont}) => {
    let {pathname}= useLocation();
    const style = useFont(pathname)
    useEffect(()=>{
        setFont(style)
    }, [setFont, pathname])
    
    const { joke, isPending, error}= useFetch(`https://v2.jokeapi.dev/joke${ pathname === '/'? '/Programming' : pathname }?blacklistFlags=racist&amount=4`)
    const handleMode= ()=>{
        console.log("Set Mode");
    }
    const handleRefresh= ()=>{
        window.location.reload(false)
    }            
    return ( 
        <div style={contentWidth} className="content">
            <div className="top">
                <h1 className="category" > {pathname === '/'? 'Programming' : pathname.slice(1) } Jokes</h1>
                <div onClick={handleMode} className="mode" >Safe Mode</div>
            </div>
            {error && <h1>{error}</h1> }
            {isPending && <h1>Loading....</h1> }
            <div className="joke_container" >
            {joke && joke.jokes.map((joke)=>(
                <div key={joke.id}> 
                    {joke.type === "single" ? (
                    <div className="single_joke joke">
                        <h1> Single: <span>{joke.joke} </span> </h1> 
                        
                    </div>
                    ) : (
                    <div className="twopart_joke">
                        <div className="setup joke">
                            <h1>Setup : <span>{joke.setup}</span> </h1> 
                        </div>
                        <div className="delivery joke">
                            <h1>Delivery: <span>{joke.delivery}</span> </h1>
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