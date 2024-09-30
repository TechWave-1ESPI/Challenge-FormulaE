import { Link } from "react-router-dom"
import LogoFormulaE from '../assets/formulae-logo.svg'
import { FaArrowRight } from "react-icons/fa";
import { FooterStyle } from '../css/FooterStyle'

const Footer = () => {
    return(
        <FooterStyle>
            <section id="footer">
                <div id="redirection">
                    <Link to='/'><img src={LogoFormulaE} alt="Logo Fórmula E" /></Link>

                    <div id="links">
                        <ul>
                            <li><Link to='/ecology' className='link'>Ecology</Link></li>
                            <li><Link to='/teams' className="link">Teams</Link></li>
                            <li><Link to='/drivers' className="link">Drivers</Link></li>
                            <li><Link to='/rules' className="link">Rules</Link></li>
                        </ul>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Forum</li>
                        </ul>
                    </div>

                    <div id="newsletter">
                        <div id="text-newsletter">
                            <h1>N<span>e</span>wsl<span>e</span>tt<span>e</span>r</h1>
                            <p>Want to know about out updates first?</p>
                        </div>
                        <div id="input-newsletter">
                            <input type="text" placeholder="useremail@gmail.com" />
                            <button><FaArrowRight/></button>
                        </div>
                    </div>
                </div>  

                <div id="termos-autorizacao">
                    <ul>
                        <li><p>Copyright @2024 - Todos os Direitos Reservados</p></li>
                    </ul>

                    <ul id="cookies">
                        <li>Privacy & Cookies</li>
                        <li>|</li>
                        <li>Accessibility</li>
                    </ul>
                </div>
            </section>
        </FooterStyle>
    )
}

export default Footer