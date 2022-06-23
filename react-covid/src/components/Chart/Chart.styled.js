import styled from "styled-components";

const StyledChart = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    .chart {
        background-color: white;
        text-align: center;
        border-radius: 10px;
        box-shadow: 1px 2px 8px 1px rgb(205, 205, 205);
        box-sizing: border-box;     
        width: 19rem;
        max-width: 100%;
        padding: 3.8rem;
        margin: 1rem;
        font-size: 16px;
    }

    h2 {
        color: #013630;
    }

    .chart:nth-child(1) h1 {
        color: #Ef476F;
    }

    .chart:nth-child(2) h1 {
        color: #06D6A0;
    }

    .chart:nth-child(3) h1 {
        color: #118AB2;
    }

    @media (max-width: 320px) {
    h1, h2 {
        font-size: 6vw;
        }
    }
`;

export default StyledChart