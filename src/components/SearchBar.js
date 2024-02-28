import { useState } from 'react';
function SearchBar(props){
    console.log(props)
    
   
    function changed(eve){
        eve.preventDefault()
        console.log(eve.target.value)
    }
    function clicked(eve){
        
        console.log("clicked")
    }
    function focused(eve){
        eve.preventDefault()
        console.log("focused")
    }

  

    function submitted(eve){
        eve.preventDefault()
        console.log("submitted")
        props.addmyProps(eve.target['mysearch'].value)
    }
    return(
        
        <section>
            <form onSubmit={submitted}>
            <input type="search" 
            onChange={changed} onFocus={focused} name="mysearch" placeholder="Search..."/>
        <button onClick={clicked}>search</button>
            </form>

            {props.myProps?<p>you searched for {props.myProps}</p>:''}
        </section>
        
    
        

    )
}
export default SearchBar