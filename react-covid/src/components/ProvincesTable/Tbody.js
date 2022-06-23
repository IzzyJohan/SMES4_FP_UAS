function Tbody(props) {
    const { province } = props;  

    return(
        <>
            <tbody>
                <tr key={province.kota}>   
                    <td></td>
                    <td>{province.kota}</td>
                    <td>{province.kasus.toLocaleString()}</td>
                    <td>{province.sembuh.toLocaleString()}</td>
                    <td>{province.dirawat.toLocaleString()}</td>
                    <td>{province.meninggal.toLocaleString()}</td>
                </tr>
            </tbody>
        </>
    );
}

export default Tbody;