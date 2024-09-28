import { HomeStyle } from "../css/HomeStyle"
import backgroundVideo from "../assets/video/formula-e-video-desktop.mp4"
import { MdOutlinePlayCircle } from "react-icons/md";

const Home = () => {
    return(
        <HomeStyle>
            <section class="inicio">

            <video autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
            </video>

                <div class="interface">
                    <h1>CONHEÇA A FORMULA <span>E</span></h1>
                    <p>A modalidade de automobilismo mais sustentável e rápida do mundo</p>
                    <div class="btn-inicio">
                        <button type="button">Saiba Mais</button>
                    </div>
                </div>

                <div class="last-race">
                    <div class="interface">
                        <a href="https://youtu.be/E6Ze3ONrXrw?si=vzL9zYaHUNTPC2iM" target="_blank">
                            <div class="last-race-btn">
                                <div class="flex">
                                    <MdOutlinePlayCircle className="play-icon"/>
                                    <p>Assista nossa última corrida</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </HomeStyle>
        
    )
}

export default Home