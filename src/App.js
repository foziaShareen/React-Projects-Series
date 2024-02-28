import React, { useEffect } from 'react';
import Header from './components/Header';


import './app.css'
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResults from './components/SearchResukts';
function App(){
  const company = "aelia and co";

  const [myProps, setMyProps] = useState([])
  const [films,setFilms]=useState([])
 
    function addmyProps(e){
     setMyProps([e,...myProps])
   }
   useEffect(()=>{console.log("initial render");
   fetchData('films')
  },[])

  async function fetchData(url){
    const response = await fetch(`https://swapi.dev/api/${url}`)
    const data = await response.json()
    setFilms(data.results)
  }
  return(
    <div className="App">
      
      
    <Header/>
    <SearchBar myProps={myProps[0]} addmyProps={addmyProps}/> 
    <SearchHistory myProps={myProps}/>
    <SearchResults films={films}/>
    
    
      
    </div>
  )

}


export default App;