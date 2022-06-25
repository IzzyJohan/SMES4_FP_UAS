import StyledStat from "./Stat.styled";

function Stat(props) {
    const { covid } = props 

    return(
        <>
            <StyledStat>
                <div className="stat"> 
                    <div className="text">
                        <h2>Positif</h2> 
                        <h1>{covid.confirmed.value.toLocaleString()}</h1>
                    </div>
                </div>
                <div className="stat"> 
                    <div className="text">
                        <h2>Sembuh</h2> 
                        <h1>{covid.recovered.value.toLocaleString()}</h1> 
                    </div>
                </div>
                <div className="stat"> 
                    <div className="text">
                        <h2>Meninggal</h2> 
                        <h1>{covid.deaths.value.toLocaleString()}</h1> 
                    </div>
                </div>
            </StyledStat>
        </>
    );
}

export default Stat;