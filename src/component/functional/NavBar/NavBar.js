import { Link } from "react-router-dom"

const NavBar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    {/* Links */}
    <ul className="navbar-nav">
      <li className="nav-item nav-link">
       <Link to={"/"}>
          Home
          </Link>
        
      </li>
      <li className="nav-item nav-link">
       <Link to={"/about"}>
          About
          </Link>
        
      </li>
      <li className="nav-item nav-link">
      <Link to={"/settings"}>
          Settings
          </Link>
        
      </li>
      <li className="nav-item nav-link">
      <Link to={"/blog"}>
          Blog
          </Link>
        
      </li>
     
    </ul>
  </div>
</nav>

  

  

  

        
 

 

   
</>

    )
}
export default NavBar