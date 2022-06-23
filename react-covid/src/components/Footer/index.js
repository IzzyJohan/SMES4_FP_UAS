import NavMenu from "../NavMenu";
import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer">
        <div> 
          <h2>COVID ID</h2>
          <p>Developed by Izzy</p>
        </div>
          <NavMenu />
      </div>
    </StyledFooter>
  );
}

export default Footer;
