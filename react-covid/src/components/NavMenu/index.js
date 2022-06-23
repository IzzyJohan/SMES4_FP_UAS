import { StyledNavMenu, StyledLink } from "./NavMenu.styled";

function NavMenu() {
    return(        
        <StyledNavMenu>
            <ul>
                <li><StyledLink to="/">Global</StyledLink></li>
                <li><StyledLink to="/indonesia">Indonesia</StyledLink></li>
                <li><StyledLink to="/provinsi">Provinsi</StyledLink></li>
                <li><StyledLink to="#">About Us</StyledLink></li>
            </ul>
        </StyledNavMenu> 
    );
}

export default NavMenu; 