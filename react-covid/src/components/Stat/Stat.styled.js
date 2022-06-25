import styled from "styled-components";

const StyledStat = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    .stat{
        background-color: white;    
        margin: 1rem;  
        width: 18rem;
        border-radius: 10px;
        box-shadow: 1px 2px 8px 1px rgb(205, 205, 205);
    }

    .text {
        display: block;
        padding-top: 23%;
        padding-bottom:23% ;
    }

    h2 {
        font-weight: 200;
    }

    .stat:nth-child(1) h1 {
        color: #Ef476F;
    }

    .stat:nth-child(2) h1 {
        color: #06D6A0;
    }

    .stat:nth-child(3) h1 {
        color: #118AB2;
    }

    @media (max-width: 320px) {
    h1, h2 {
        font-size: 6vw;
        }
    }
`;

export default StyledStat