import {Link} from "react-router-dom"

const Nav = () => { 
    return(
        <wrapper>
            <link className="NavLink" to="/">Home</link>
            <link className="NavLink" to="/todolist">To Do List</link>
            <link className="NavLink" to="/archive">Archive</link>
            
        </wrapper>
    )
};


export default Nav;