// import styles from "./Hero.module.css";
import image from "../../assets/images/medic.png";
import StyledHero from "./Hero.styled";

function Hero() {
    return(
        <StyledHero>
            <div className="hero">
                <div className="descriptionbox">
                    <h2>COVID ID</h2>
                    <p className="subtitle">Monitoring Perkembangan Covid-19</p>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque culpa, nemo voluptas nostrum sapiente voluptatibus alias laborum magni corrupti, quos magnam dolor aperiam exercitationem nam harum non soluta! Et, magni.</p>
                    <button>Vaccine</button>
                </div>
                <div className="imagebox">
                    <img src={image} alt="medic" />
                </div>
            </div>  
        </StyledHero>          
    );
}

export default Hero;