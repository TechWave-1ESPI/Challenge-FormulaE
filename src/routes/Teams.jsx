//  Router DOM
import { Link } from 'react-router-dom';

// CSS
import { TeamsStyle } from '../css/TeamsStyle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Footer
import Footer from '../components/Footer'

// Arrows
import { MdKeyboardDoubleArrowRight , MdKeyboardDoubleArrowLeft  } from "react-icons/md";

// Slider
import Slider from 'react-slick'


// Images
import AndrettiImg from '../assets/teams/andretti.png'
import CupraImg from '../assets/teams/cupra.png'
import EnvisionImg from '../assets/teams/envision.png'
import ErtImg from '../assets/teams/ert.png'
import JaguarImg from '../assets/teams/jaguar.png'
import MahindraImg from '../assets/teams/mahindra.png'
import MaseratiImg from '../assets/teams/maserati.png'
import MclarenImg from '../assets/teams/mclaren.png'
import NissanImg from '../assets/teams/nissan.png'
import PenskeImg from '../assets/teams/penske.png'
import PorscheImg from '../assets/teams/porsche.png'


const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow next" onClick={onClick}>
            <MdKeyboardDoubleArrowRight size={40} />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow prev" onClick={onClick}>
            <MdKeyboardDoubleArrowLeft size={40} />
        </div>
    );
};

const Teams = () => {
    var settings = {
        centerMode: true,
        centerPadding: "-5px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                            <Link to={'/andretti'}><img src={AndrettiImg} alt="Andretti"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/cupra'}><img src={CupraImg} alt="Cupra"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/envision'}><img src={EnvisionImg} alt="Envision"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/ert'}><img src={ErtImg} alt="Ert"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/jaguar'}><img src={JaguarImg} alt="Jaguar"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/mahindra'}><img src={MahindraImg} alt="Mahindra"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/maserati'}><img src={MaseratiImg} alt="Masserati"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'mclaren'}><img src={MclarenImg} alt="McLaren"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/nissan'}><img src={NissanImg} alt="Nissan"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/penske'}><img src={PenskeImg} alt="Penske"/></Link>
                        </div>
                        <div className="box">
                            <Link to={'/porsche'}><img src={PorscheImg} alt="Porsche"/></Link>
                        </div>
                    </Slider>
                </section>
            </div>
            <Footer/>
        </TeamsStyle>
    )
}

export default Teams