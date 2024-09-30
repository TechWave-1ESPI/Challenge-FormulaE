import { TeamsLayoutSyle } from "../../css/TeamsLayoutStyle";
import Footer from "../../components/Footer";
import { GiSoundWaves } from "react-icons/gi";
import { useRef, useEffect } from "react"; // Import useRef and useEffect

const Mahindra = () => {
    const audioRef = useRef(null); // Reference for the audio element

    // Function to load the audio file and handle errors
    const loadAudio = () => {
        if (audioRef.current) {
            audioRef.current.load(); // Explicitly load the audio file
            console.log("Audio file loaded"); // Log for debugging
        } else {
            console.error("Audio reference is null");
        }
    };

    // Function to play the audio when the icon is clicked
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.volume = 1.0;  // Ensure volume is at 100%
            audioRef.current.muted = false; // Ensure the audio is not muted
            
            audioRef.current.play()
                .then(() => {
                    console.log("Playing audio");
                })
                .catch((error) => {
                    console.error("Error playing audio:", error.message);
                });
        } else {
            console.error("Audio reference is null, cannot play audio.");
        }
    };

    // Load the audio file when the component is mounted
    useEffect(() => {
        loadAudio(); // Load the audio when component mounts
    }, []);

    return (
        <TeamsLayoutSyle>
            <section className="section-1">
                <div className="interface">
                    <div className="content">
                        <img src="/src/assets/logos-carros-pilotos/mahindra-off-fundo.png" alt="Mahindra Car" className="car-image" />
                        <div className="text-content">
                            <img src="/src/assets/logos-carros-pilotos/mahindra-logo.png" alt="Mahindra Logo" className="logo" />
                            <h1>Mahindra Formula E Team</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit,</p>
                            <div className="audio">
                                <audio ref={audioRef} id="musica" preload="auto">
                                    <source src="/src/assets/audio/car.mp3" type="audio/mpeg" /> {/* Ensure file path is correct */}
                                    Your browser does not support the audio element.
                                </audio>
                                <GiSoundWaves className="audio-icon" onClick={playSound} />
                                <p>Clique aqui para ouvir o som do Mahindra M10Electro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other sections */}
            <section className="section-titulo">
                <h2 className="drivers-title"><span className="mahindra">Mahindra</span> Drivers</h2>
            </section>

            <section className="section-2">
                <div className="driver">
                    <img src="/src/assets/logos-carros-pilotos/Eduardo-sem-fundo.png" alt="Edoardo Mortara" className="driver-image" />
                    <div className="driver-info">
                        <img src="/src/assets/logos-carros-pilotos/mahindra-logo.png" alt="Mahindra Logo" className="logo" />
                        <h3>Edoardo Mortara</h3>
                        <p><strong>01/12/1987 (37) Country:</strong> <img src="/src/assets/logos-carros-pilotos/suiça.png" alt="Switzerland Flag" className="flag" /></p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit,</p>
                        <div className="classification">
                            <strong>Classificação</strong>
                            <p>20th</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h4>CORRIDAS</h4>
                                <p>91</p>
                            </div>
                            <div className="stat">
                                <h4>VITÓRIAS</h4>
                                <p>6</p>
                            </div>
                            <div className="stat">
                                <h4>PÓDIOS</h4>
                                <p>13</p>
                            </div>
                            <div className="stat">
                                <h4>POLES</h4>
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className="driver">
                    <img src="/src/assets/logos-carros-pilotos/mahindra-piloto-2.png" alt="Nyck de Vries" className="driver-image" />
                    <div className="driver-info">
                        <img src="/src/assets/logos-carros-pilotos/mahindra-logo.png" alt="Mahindra Logo" className="logo" />
                        <h3>NYCK DE VRIES</h3>
                        <p><strong>02/06/1995 (29) Country:</strong> <img src="/src/assets/logos-carros-pilotos/suiça.png" alt="Switzerland Flag" className="flag" /></p>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit,</p>
                        <div className="classification">
                            <strong>Classificação</strong>
                            <p>21st</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h4>CORRIDAS</h4>
                                <p>52</p>
                            </div>
                            <div className="stat">
                                <h4>VITÓRIAS</h4>
                                <p>4</p>
                            </div>
                            <div className="stat">
                                <h4>PÓDIOS</h4>
                                <p>8</p>
                            </div>
                            <div className="stat">
                                <h4>POLES</h4>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </TeamsLayoutSyle>
    );
}

export default Mahindra;
