import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
        color: #FFFFFFFF;
        font-family: 'open sans';
`;
    
const StyledNavMenu = styled.div`
    color: white;

    ul {
        list-style-type: none;
        padding: 0%;
    }

    li {
        margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin: 0 1rem;
    }
}
`;

export { StyledLink, StyledNavMenu };