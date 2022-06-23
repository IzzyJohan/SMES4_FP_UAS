import CovidCharts from "../../components/CovidCharts";
import Hero from "../../components/Hero";
import axios from "axios";
import { useEffect } from "react";
import Summary from "../../components/Summary";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch, useSelector } from "react-redux";
import { updateCovid } from "../../features/covidSlice";

function Indonesia() {
    const covid = useSelector((store) => store.covid.covid);

    const dispatch = useDispatch();

    const URL = "https://covid19.mathdro.id/api/countries/indonesia";
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getIndonesia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getIndonesia() {
        // Fetch data dari Axios
        const response = await axios(URL);
        dispatch(updateCovid(response.data))
    }   

    const check = covid.confirmed;

    return(
        <>
            <Hero />
            {check && <CovidCharts covid={covid} title="Indonesia" />}
            <Summary summary={ENDPOINTS.SUMMARYINDONESIA} title="Indonesia" /> 
        </>
    );
}

export default Indonesia;