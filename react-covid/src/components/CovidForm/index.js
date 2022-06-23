import image from "../../assets/images/healthy.png";
import { useState } from "react";
import StyledCovidForm from "./CovidForm.styled";
import { useDispatch } from "react-redux";
import { updateProvinces } from "../../features/covidSlice";
import { useSelector } from "react-redux";

function CovidForm() {

    const dispatch = useDispatch()
    
    const provinces = useSelector((store) => store.covid.provinces)
    
    const [formData, setFormData] = useState({      
        provinsi: "Jakarta",
        status: "kasus",
        jumlah: "",
    });

    const { provinsi, status, jumlah } = formData;

    const [isJumlahError, setIsJumlahError] = useState(false);

    function handleChange(e) {
        const { name , value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        if (jumlah === "") {
            setIsJumlahError(true);
        }

        else {

            const updateProvince = provinces.map(object =>
                object.kota === provinsi
                  ? { ...object, [status]: object[status] + Number(jumlah) }
                  : object
              );
              
            dispatch(updateProvinces(updateProvince));
            setIsJumlahError(false);   
            
        }
    }

    return(
        <StyledCovidForm>
            <section className="covidform">
                <div className="imagebox">
                    <img src={image} alt="healthy" />
                </div>
                <div className="formbox">
                    <h2>Covid Form</h2>
                        <form onSubmit={handleSubmit} action="">
                            <div className="provinsibox">
                                <label>Provinsi</label><br />
                                <select className="provinsi" name="provinsi" id="provinsi" onChange={handleChange} value={provinsi}>
                                    {provinces.map(( province ) => (    
                                        <option key={province.kota} value={province.kota}>{province.kota}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="statusbox">
                                <label>Status</label><br /> 
                                <select className="status" name="status" id="status" onChange={handleChange} value={status}>
                                    <option value="kasus">Positif</option>
                                    <option value="sembuh">Sembuh</option>
                                    <option value="dirawat">Dirawat</option>
                                    <option value="meninggal">Meninggal</option>
                                </select>                            
                            </div>
                            <div className="jumlahbox">
                                <label>Jumlah</label><br />
                                <input onChange={handleChange} type="number" min="0" name="jumlah" value={jumlah} /><br />
                                 {isJumlahError && <p>Harap isi nominal jumlah</p>} 
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
            </section>
        </StyledCovidForm>
    );
}

export default CovidForm;