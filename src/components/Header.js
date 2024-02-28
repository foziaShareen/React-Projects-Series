import Nav from "./Nav"
function Header(){
    const company = "aelia and co"
    return(
        <header>
            Welcome to {company}
            <Nav/>
        </header>
    )
}
export default Header