import Table from "../ProvincesTable/Table";
import StyledProvinces from "./Provinces.styled";

function Provinces() {
    return(
        <StyledProvinces>
            <h2 id="provinsi">Provinsi</h2>
            <p>Data Covid Berdasarkan Provinsi</p>
            <Table />
        </StyledProvinces>
    );
}

export default Provinces;