import Link from "./Link"

function Nav(){
    const links =[
        {title:"Films",url:"https://swapi.dev/api/films"},
        {title:"People",url:"https://swapi.dev/api/people"},
        {title:"Films",url:"https://swapi.dev/api/planets"},
    ]
    return(
        <>
        {links.map((lnk)=>(
            <Link title={lnk.title} url={lnk.url}/>
        ))}
       

      </ >)
}
export default Nav