import styled from "styled-components";

const StyledHero = styled.div`
    padding: 1rem;
    max-width: 1000px;

    img {
        max-width: 100%;
    }

    h2 {
        color: #2EC4B6;
    }

    .subtitle {
        color: #0093AB;
    }

    .description {
        font-family: 'open sans';
    }

    button {
        margin-top: 0.8rem;
        padding: 0.7rem;
        background-color: #2EC4B6;
        color: #ffffff;
        border-style: none;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgb(179, 179, 179);
        cursor: pointer;
    }

    button:hover {
        background-color: #0093AB;
    }

    @media (min-width: 768px) {
        margin: 0 auto;

    .hero {
        display: flex;
        direction: row;
        align-items: center;
    }

    .descriptionbox {
        padding: 1rem;
        flex-basis: 40%;
    }

    .imagebox {
        flex-basis: 60%;
    }
}
`;

export default StyledHero;