import Stat from "../Stat";
import StyledCovidStats from "./CovidStats.styled";

function CovidStats(props) {
    const { covid, title } = props;
    
    return(
        <StyledCovidStats>
            <h2 className="title" id="global">{title}</h2>
            <p>{`Data Covid Berdasarkan ${title}`}</p>
            <Stat covid={covid} />  
        </StyledCovidStats> 
    );
}

export default CovidStats;