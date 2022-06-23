import NavMenu from "../NavMenu";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
        <nav className="navbar">
              <h1>COVID ID</h1>
              <NavMenu />
        </nav>
    </StyledNavbar>
  );
}

export default Navbar;
