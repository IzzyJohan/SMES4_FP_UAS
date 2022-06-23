import StyledSummary from "./Summary.styled";

function Summary(props) {
    const { summary, title } = props 
    
    return(
        <StyledSummary>
            <h2>Summary</h2>
            <p>{`Data Covid Berdasarkan ${title}`}</p>
            <img src={summary} alt="" />
        </StyledSummary>
    );
}

export default Summary;