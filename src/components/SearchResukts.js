export default function SearchResults({films}){

    return(
        <ul> {films.map((film)=>{return(
            <li key={film.episode_id}>{film.title}</li>
            
            )})}</ul>
    )
}