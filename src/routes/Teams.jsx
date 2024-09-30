import { TeamsStyle } from '../css/TeamsStyle'
import Footer from '../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <TeamsStyle>
            <div class="teams-title">
                <h2>FORMULA <span>E</span> TEAMS</h2>
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
            <Footer/>
        </TeamsStyle>
    )
}

export default Teams