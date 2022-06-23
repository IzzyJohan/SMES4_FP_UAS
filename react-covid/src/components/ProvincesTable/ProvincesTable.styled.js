import styled from "styled-components";

const StyledProvincesTable = styled.div `
    overflow-x: auto;
    font-family: 'open sans';

    table {
        padding: 1rem;
        width: 80%;
        max-width: 100%;
        min-width: 600px;
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
        counter-reset: row-num -1;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    th {
        border: 1px solid #ddd;
        padding: 10px 0 10px 0;
        background-color: #2EC4B6;
        color: #fff;
    }

    tr {
        counter-increment: row-num;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    td:first-child::before {
        content: counter(row-num); 
    }

    td:first-child {
        text-align: center;
    }   
`;

export default StyledProvincesTable; 