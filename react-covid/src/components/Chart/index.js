import StyledChart from "./Chart.styled";

function Chart(props) {
    const { covid } = props 

    return(
        <>
            <StyledChart>
                <div className="chart"> 
                    <h2>Positif</h2> 
                    <h1>{covid.confirmed.value.toLocaleString()}</h1> 
                </div>
                <div className="chart"> 
                    <h2>Sembuh</h2> 
                    <h1>{covid.recovered.value.toLocaleString()}</h1> 
                </div>
            
                <div className="chart"> 
                    <h2>Meninggal</h2> 
                    <h1>{covid.deaths.value.toLocaleString()}</h1> 
                </div>
            </StyledChart>
        </>
    );
}

export default Chart;