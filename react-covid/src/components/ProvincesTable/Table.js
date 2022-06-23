import { useSelector } from "react-redux";
import StyledProvincesTable from "./ProvincesTable.styled";
import Tbody from "./Tbody";
import Thead from "./Thead";

function Table() {
    const provinces = useSelector((store) => store.covid.provinces)

    return(
        <StyledProvincesTable>
            <table>
                <Thead />
                {provinces.map(province => <Tbody key={province.kota} province={province}/>)}  
            </table>
        </StyledProvincesTable>
    );    
}

export default Table;