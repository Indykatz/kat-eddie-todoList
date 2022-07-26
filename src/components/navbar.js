import { Link } from "react-router-dom";
import { NavFlex, NavItem } from "../styles/header.styles";

const Nav = () => {
  const navbarItems = ["Home", "ToDo", "Archive"];
  return (
    <NavFlex>
      {navbarItems.map((navbarItem, i) => {
        let path = "/";
        if (navbarItem !== "Home") {
          path = "/" + navbarItem;
        }
        return (
          <NavItem className="NavItemStyled" key={i}>
            <Link to={path}>{navbarItem}</Link>
          </NavItem>
        );
      })}
    </NavFlex>
  );
};

export default Nav;
