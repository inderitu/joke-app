// useFetch is  a custom hook
import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [error, setError]= useState(null);
    const [isPending, setISPending]= useState(true);
    const [joke, setJokes]= useState(null);

    useEffect(()=>{
        const abtCont= new AbortController();
        fetch(url)
            .then(res =>{
                if(!res.ok){ // error coming from API
                    throw Error("could not fetch data for that resource");
                }
                return res.json()
            })
            .then(data =>{
                setISPending(false)
                setJokes(data)
                setError(null)
            })
            .catch(err =>{
                // catch network & connection erros
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted");
                }else{
                    setISPending(false);
                    setError(err.message)
                }
            })
            return ()=> abtCont.abort();
    }, [url])
    return { joke, isPending, error}
}
 
export default useFetch;