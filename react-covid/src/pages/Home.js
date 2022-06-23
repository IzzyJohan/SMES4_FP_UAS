import Hero from "../components/Hero";
import CovidCharts from "../components/CovidCharts";
import Summary from "../components/Summary";
import ENDPOINTS from "../utils/constants/endpoints";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCovid } from "../features/covidSlice";

function Home() {
    const covid = useSelector((store) => store.covid.covid);

    const dispatch = useDispatch();

    const URL = "https://covid19.mathdro.id/api";
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getGlobal() {
        // Fetch data dari Axios
        const response = await axios(URL);
        dispatch(updateCovid(response.data))
    }   
    
    const check = covid.confirmed;  

  return (
    <>
      <Hero />
      {check && <CovidCharts covid={covid} title="Global" />}
      <Summary summary={ENDPOINTS.SUMMARYGLOBAL} title="Global" />
    </>
  );
}

export default Home;
