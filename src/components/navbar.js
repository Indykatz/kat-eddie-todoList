import {Link} from "react-router-dom"

const Nav = () => { 
    return(
        <wrapper>
            <Link className="NavLink" to="/">Home</Link>
            <Link className="NavLink" to="/todolist">To Do List</Link>
            <Link className="NavLink" to="/archive">Archive</Link>
            
        </wrapper>
    )
};


export default Nav;