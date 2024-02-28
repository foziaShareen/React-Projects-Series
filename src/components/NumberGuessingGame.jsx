// import {useState} from 'react'
// function NumberGuessingGame(){
// const[guessNumber,setGuessNumber]=useState('')
// const[score,setScore]=useState(0)

// const check=()=>{
//     const randomNUmber=Math.floor(Math.random()*10)+1
//     if(randomNUmber===guessNumber)
//     {setScore(score+1)}
// }

//     return(
//         <>
//          What number (between 1 and 10) am I thinking of? 

//         <input type="number" value={guessNumber}
//         onChange={(e)=>setGuessNumber(e.target.value)}
       
//         />
//          <button onClick={()=>check()}>guess</button>
//          your score = {score}

//         </>

//     )
// }
// export default NumberGuessingGame