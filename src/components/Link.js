import './link.css'
function Link({title,url}){
    return(
        
        <a className="navlink"href={url}>{title}</a>
    )
}
export default Link