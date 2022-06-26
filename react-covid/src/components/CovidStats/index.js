import Stat from "../Stat";
import StyledCovidStats from "./CovidStats.styled";

function CovidStats(props) {
    const { title } = props;
    
    return(
        <StyledCovidStats>
            <h2 className="title" id="global">{title}</h2>
            <p>{`Data Covid Berdasarkan ${title}`}</p>
            <Stat />  
        </StyledCovidStats> 
    );
}

export default CovidStats;