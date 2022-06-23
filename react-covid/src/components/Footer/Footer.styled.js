import styled from "styled-components";

const StyledFooter = styled.div`
    background-color: #2EC4B6;
    padding: 1rem;
    color: #F1FAEE;

    h2 {
        margin-bottom: -0.5rem;
    }

    @media (max-width: 768px) {
        p {
            margin-bottom: 1.5rem;
        }
    }

    @media (min-width: 768px) {
        .footer {
            display: flex;
            direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export default StyledFooter;