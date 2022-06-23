import Chart from "../Chart";
import StyledCovidCharts from "./CovidCharts.styled";

function CovidCharts(props) {
    const { covid, title } = props;
    
    return(
        <StyledCovidCharts>
            <h2 className="title" id="global">{title}</h2>
            <p>{`Data Covid Berdasarkan ${title}`}</p>
            <Chart covid={covid} />  
        </StyledCovidCharts> 
    );
}

export default CovidCharts;