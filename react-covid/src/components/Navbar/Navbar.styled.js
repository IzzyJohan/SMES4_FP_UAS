import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: #2EC4B6;
    padding: 1rem;
    color: #FFFFEF;

    @media (min-width: 768px) {
        .navbar {
            display: flex;
            direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export default StyledNavbar;