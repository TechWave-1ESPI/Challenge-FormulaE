// CSS
import { TeamsStyle } from '../css/TeamsStyle'

// Arrows
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft  } from "react-icons/md";

// Slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import AndrettiImg from '../assets/teams/andretti.png'
import CupraImg from '../assets/teams/cupra.png'
import EnvisionImg from '../assets/teams/envision.png'
import ErtImg from '../assets/teams/ert.png'
import JaguarImg from '../assets/teams/jaguar.png'
import MahindraImg from '../assets/teams/mahindra.png'
import MasseratiImg from '../assets/teams/maserati.png'
import MclarenImg from '../assets/teams/mclaren.png'
import NissanImg from '../assets/teams/nissan.png'
import PenskeImg from '../assets/teams/penske.png'
import PorscheImg from '../assets/teams/porsche.png'



const Teams = () => {
    var settings = {
        centerMode: true,
        centerPadding: "-5px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true, // Keep this to use default arrows
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: true // Keep default arrows for this breakpoint as well
            }
          },
          {
            breakpoint: 600,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",
                    initialSlide: 0,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true,
                    arrows: true, // Default arrows for mobile too
                    dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true // Default arrows for smaller screens
            }
          }
        ]
    };

    return(
        <TeamsStyle>
            <div className="interface">
                <div class="teams-title">
                    <h2><span>2024</span> TEAMS</h2>
                </div>
                <section>
                    <Slider {...settings}>
                        <div className="box">
                            <img src={AndrettiImg} alt="Andretti"/>
                        </div>
                        <div className="box">
                            <img src={CupraImg} alt="Cupra"/>
                        </div>
                        <div className="box">
                            <img src={EnvisionImg} alt="Envision"/>
                        </div>
                        <div className="box">
                            <img src={ErtImg} alt="Ert"/>
                        </div>
                        <div className="box">
                            <img src={JaguarImg} alt="Jaguar"/>
                        </div>
                        <div className="box">
                            <img src={MahindraImg} alt="Mahindra"/>
                        </div>
                        <div className="box">
                            <img src={MasseratiImg} alt="Masserati"/>
                        </div>
                        <div className="box">
                            <img src={MclarenImg} alt="McLaren"/>
                        </div>
                        <div className="box">
                            <img src={NissanImg} alt="Nissan"/>
                        </div>
                        <div className="box">
                            <img src={PenskeImg} alt="Penske"/>
                        </div>
                        <div className="box">
                            <img src={PorscheImg} alt="Porsche"/>
                        </div>
                    </Slider>
                </section>
            </div>
        </TeamsStyle>
    )
}

export default Teams