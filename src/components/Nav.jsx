import { useState } from 'react'
import { Link } from 'react-router-dom'

import { NavStyle } from '../css/NavStyle'
import { BsPersonCircle } from "react-icons/bs";

import LogoETV from '../assets/etv-logo-pipe.png'
import LogoFormulaE from '../assets/formulae-logo.svg'


const Nav = () => {

    const [active, setActive] = useState(false);

    const toggleMode = () => {
        setActive(!active)
    }

    return(
        <NavStyle>
            <header>
                <div className="logo-nav">
                    <Link to='/'><img src={LogoFormulaE} alt="Logo da Fórmula E" /></Link>
                </div>
                <div className="menu-hamburger" onClick={toggleMode}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className={active ? 'menu-nav menu-nav-open' : 'menu-nav menu-nav-close'}>
                    <ul className="nav-links">
                        <div className="flex">
                            <li><Link to="/ecology" id="ecology">ECOLOGY</Link></li>
                            <li><Link to="/teams" id="teams">TEAMS</Link></li>
                            <li><Link to="/drivers" id="drivers">DRIVERS</Link></li>
                            <li><Link to="/rules" id="rules">RULES</Link></li>
                        </div>
                    </ul>
                    <ul>
                        <div className="e-tv-and-register">
                            <div className="e-tv">
                                <img src={LogoETV} alt="Logo da E TV" />
                            </div>
                            <div className="e-tv-btn">
            
                                <div className="sign-in">
                                    <div className="flex">
                                        <h1><BsPersonCircle/></h1>
                                        <Link to="/login" id="login">SIGN-IN</Link>
                                    </div>
                                </div>
                                
                                <div className="register">
                                    <span><Link to="/usuario" id='subscribe'>SUBSCRIBE</Link></span>
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        </NavStyle>
    )
}

export default Nav