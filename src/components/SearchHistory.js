function SearchHistory(props){
    return(
        <ul>
            {props.myProps.map((item)=>{
                return(
                    <li key={item}>{item}</li>
                )
            })}
        </ul>
    )
}
export default SearchHistory