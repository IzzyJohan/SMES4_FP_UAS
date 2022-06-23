import styled from "styled-components";

const StyledCovidForm = styled.div`
    background-color: rgb(240, 240, 240);
    padding: 1rem;

    h2 {
        text-align: center;
        color: #2EC4B6;
    }

    form {
        text-align: center;
    }

    button {
        margin-top: 1rem;
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

    .imagebox {
        text-align: center;
    }

    img {
        max-width: 100%;
    }

    .provinsibox {
        margin-bottom: 0.6rem;
    }

    .statusbox {
        margin-bottom: 0.6rem;
    }

    .jumlahbox {
        margin-bottom: 0.6rem;
    }

    .provinsi {
        width: 18rem;
        max-width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid #2EC4B6;
        color: rgb(124, 124, 124);
    }

    .status {
        width: 18rem;
        max-width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid #2EC4B6;
        color: rgb(124, 124, 124);
    }

    input {
        border-radius: 5px;
        width: 18rem;
        max-width: 100%;
        height: 2rem;
        box-sizing: border-box;
        border: 1px solid #2EC4B6;
    }

    label {
        display: inline-block;
        width: 285px;
        margin-bottom: 0.1rem;
        text-align: left;
    }

    p {
        color: #Ef476F;
    }

    @media (min-width: 768px) {
        .covidform {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 1000px;
            margin: 0 auto;
        }

        .formbox {
            flex-basis: 40%;
        }

        .imagebox {
            flex-basis: 40%;
        }
    }
`;  

export default StyledCovidForm;