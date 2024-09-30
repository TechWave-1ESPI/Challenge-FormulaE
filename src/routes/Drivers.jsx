// Router Dom
import { Link } from 'react-router-dom';

// CSS
import { DriversStyle } from '../css/DriversStyle'
import Footer from '../components/Footer'

// Arrows
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

// Slider
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import LucasDiGrassiImg from '../assets/drivers/lucas-di-grassi.png';
import NicoMullerImg from '../assets/drivers/nico-muller.png';
import JakeDenisImg from '../assets/drivers/jake-denis.png';
import NormanNatoImg from '../assets/drivers/norman-nato.png';
import JeanEricVergneImg from '../assets/drivers/jean-eric-vergne.png';
import StofellVandoorneImg from '../assets/drivers/stofell-vandoorne.png';
import RobinFrijnsImg from '../assets/drivers/robin-frijns.png';
import SebastianBuemiImg from '../assets/drivers/sebastian-buemi.png';
import DanTicktumImg from '../assets/drivers/dan-ticktum.png';
import SergioSetteCamaraImg from '../assets/drivers/sergio-sette-camara.png';
import MitchEvansImg from '../assets/drivers/mitch-evans.png';
import NickCassidyImg from '../assets/drivers/nick-cassidy.png';
import EdoardoMortaraImg from '../assets/drivers/edoardo-mortara.png';
import NickDeVriesImg from '../assets/drivers/nick-de-vries.png';
import JehanDaruvalaImg from '../assets/drivers/jehan-daruvala.png';
import MaximilianGuntherImg from '../assets/drivers/maximilian-gunther.png';
import JakeHughesImg from '../assets/drivers/jake-hughes.png';
import SamBirdImg from '../assets/drivers/sam-bird.png';
import OliverRowlandImg from '../assets/drivers/oliver-rowland.png';
import SachaFenestrazImg from '../assets/drivers/sacha-fenestraz.png';
import PascalWehrleinImg from '../assets/drivers/pascal-wehrlein.png';
import AntonioFelixDaCostaImg from '../assets/drivers/antonio-felix-da-costa.png';


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

const Drivers = () => {
    var settings = {
        centerMode: true,
        centerPadding: "-5px",
        initialSlide: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                    dots: false,
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
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true, // Default arrows for smaller screens
                    dots: false
                }
            }
        ]
    };

    return (
        <DriversStyle>
            <div className="interface">
                <div className="drivers-title">
                    <h2><span>2024</span> DRIVERS</h2>
                </div>
                <section>
                    <Slider {...settings}>
                        <div className="box">
                            <Link to={'/cupra'}><img src={LucasDiGrassiImg} alt="Lucas Di Grassi" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/cupra'}><img src={NicoMullerImg} alt="Nico Muller" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/andretti'}><img src={JakeDenisImg} alt="Jake Denis" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/andretti'}><img src={NormanNatoImg} alt="Norman Nato" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/penske'}><img src={JeanEricVergneImg} alt="Jean Eric Vergne" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/penske'}><img src={StofellVandoorneImg} alt="Stofell Vandoorne" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/envision'}><img src={RobinFrijnsImg} alt="Robin Frijns" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/envision'}><img src={SebastianBuemiImg} alt="Sebastian Buemi" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/ert'}><img src={DanTicktumImg} alt="Dan Ticktum" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/ert'}><img src={SergioSetteCamaraImg} alt="Sergio Sette Camara" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/jaguar'}><img src={MitchEvansImg} alt="Mitch Evans" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/jaguar'}><img src={NickCassidyImg} alt="Nick Cassidy" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/mahindra'}><img src={EdoardoMortaraImg} alt="Edoardo Mortara" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/mahindra'}><img src={NickDeVriesImg} alt="Nick De Vries" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/maserati'}><img src={JehanDaruvalaImg} alt="Jehan Daruvala" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/maserati'}><img src={MaximilianGuntherImg} alt="Maximilian Gunther" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/mclaren'}><img src={JakeHughesImg} alt="Jake Hughes" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/mclaren'}><img src={SamBirdImg} alt="Sam Bird" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/nissan'}><img src={OliverRowlandImg} alt="Oliver Rowland" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/nissan'}><img src={SachaFenestrazImg} alt="Sacha Fenestraz" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/porsche'}><img src={PascalWehrleinImg} alt="Pascal Wehrlein" /></Link>
                        </div>
                        <div className="box">
                            <Link to={'/porsche'}><img src={AntonioFelixDaCostaImg} alt="Antonio Felix Da Costa" /></Link>
                        </div>
                    </Slider>
                </section>
            </div>
            <Footer/>
        </DriversStyle>
    )
}

export default Drivers;
