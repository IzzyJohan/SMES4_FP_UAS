import styled from "styled-components";

const StyledSummary = styled.div`
    text-align: center;

    h2 {
        color: #2EC4B6;
    }

    p {
        color: #0093AB;
        margin-bottom: 2.5rem;
    }

    img {
        border-radius: 12px;
        box-shadow: 1px 2px 7px 2px #d7d7d9;
        max-width: 100%;
        width: 90%;
        margin-bottom: 4rem;
    }

    @media (min-width: 768px) {
        img {
            width: 70%;
        }
    }
`;

export default StyledSummary;