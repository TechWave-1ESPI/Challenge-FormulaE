import { TeamsLayoutSyle } from "../../css/TeamsLayoutStyle";
import Footer from "../../components/Footer";
import { GiSoundWaves } from "react-icons/gi";
import { useRef, useEffect } from "react"; // Import useRef and useEffect

const Maserati = () => {
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

    // Function to play the audio when icon is clicked
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
                        <img src="/src/assets/logos-carros-pilotos/maserati-carro.png" alt="Maserati Car" className="car-image" />
                        <div className="text-content">
                            <img src="/src/assets/logos-carros-pilotos/maserati-logo.png" alt="Maserati Logo" className="logo" />
                            <h1>MASERATI MSG RACING</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit.</p>
                            <div className="audio">
                                <audio ref={audioRef} id="musica" preload="auto">
                                    <source src="/src/assets/audio/car.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                                <GiSoundWaves className="audio-icon" onClick={playSound} />
                                <p>Clique aqui para ouvir o som do Maserati Tipo Folgore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-titulo">
                <h2 className="drivers-title"><span className="maserati">MASERATI</span> Drivers</h2>
            </section>

            <section className="section-2">
                <div className="driver">
                    <img src="/src/assets/logos-carros-pilotos/JEHAN-DARUVALA-maserati.png" alt="Jehan Daruvala" className="driver-image" />
                    <div className="driver-info">
                        <img src="/src/assets/logos-carros-pilotos/Maserati-logo.png" alt="Maserati Logo" className="logo" />
                        <h3>JEHAN DARUVALA</h3>
                        <p><strong>01/10/1998 (25) Country:</strong> <img src="/src/assets/logos-carros-pilotos/suiça.png" alt="Switzerland Flag" className="flag" /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit.</p>
                        <div className="classification">
                            <strong>Classificação</strong>
                            <p className="maserati">19th</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h4>CORRIDAS</h4>
                                <p className="maserati">12</p>
                            </div>
                            <div className="stat">
                                <h4>VITÓRIAS</h4>
                                <p className="maserati">0</p>
                            </div>
                            <div className="stat">
                                <h4>PÓDIOS</h4>
                                <p className="maserati">0</p>
                            </div>
                            <div className="stat">
                                <h4>POLES</h4>
                                <p className="maserati">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className="driver">
                    <img src="/src/assets/logos-carros-pilotos/MAXIMILIAN-GÜNTHER-MASERATI.png" alt="Maximilian Günther" className="driver-image" />
                    <div className="driver-info">
                        <img src="/src/assets/logos-carros-pilotos/Maserati-logo.png" alt="Maserati Logo" className="logo" />
                        <h3>MAXIMILIAN GÜNTHER</h3>
                        <p><strong>02/07/1997 (26) Country:</strong> <img src="/src/assets/logos-carros-pilotos/alemanha.png" alt="Germany Flag" className="flag" /></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus justo neque, id finibus est bibendum ut. Vivamus consectetur, mi at ornare facilisis, purus urna pharetra enim, sed pellentesque nulla arcu convallis orci. Quisque tempus leo id justo consectetur convallis. Phasellus id sem hendrerit.</p>
                        <div className="classification">
                            <strong>Classificação</strong>
                            <p className="maserati">8th</p>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <h4>CORRIDAS</h4>
                                <p className="maserati">79</p>
                            </div>
                            <div className="stat">
                                <h4>VITÓRIAS</h4>
                                <p className="maserati">5</p>
                            </div>
                            <div className="stat">
                                <h4>PÓDIOS</h4>
                                <p className="maserati">10</p>
                            </div>
                            <div className="stat">
                                <h4>POLES</h4>
                                <p className="maserati">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </TeamsLayoutSyle>
    );
}

export default Maserati;
