import { useState } from "react";
import CovidForm from "../../components/CovidForm";
import Hero from "../../components/Hero";
import Provinces from "../../components/Provinces";
import data from "../../utils/constants/provinces";
    
function Provinsi() {
    const [provinces, setProvinces] = useState(data.provinces); 

    return(
        <>
            <Hero />
            <Provinces provinces={provinces} /> 
            <CovidForm provinces={provinces} setProvinces={setProvinces} /> 
        </>
    );
}

export default Provinsi;