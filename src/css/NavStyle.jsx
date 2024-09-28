import styled from 'styled-components'

export const NavStyle = styled.section`

header{
    padding-bottom: -200px;
    display: flex;
    box-shadow: 0 0 8px #1919193e;
    background-color: #fff;
    justify-content: space-around;
}

header a{
    color: black;
}

.logo-nav img{
    margin: 20px;
    cursor: pointer;
    width: 250px;
}

nav{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

nav ul{
    width: 30rem;
}

nav ul .flex{
    margin-top: 30px;
    gap: 30px;
}

nav ul li{
    list-style: none;
}

nav ul li a{
    font-size: 20px;
    text-decoration: none;
    transition: 0.3s;
    padding: 0 10px;
    position: relative;
}

nav ul li a:hover{
    color: var(--azul-logo);
}

nav ul li a::before{
    content: "";
    background-color: #0000FF;
    position: absolute;
    left: 10px;
    bottom: -0.3rem;
    height: 3px;
    width: 0;
    transition: all .3s;
}

nav ul li a:hover::before{
    width: 80%;
    bottom: -0.3rem;
}

.e-tv-and-register{
    display: flex;
}

.e-tv{
    margin-top: 10px;
}

.e-tv img{
    margin-right: 30px;
    width: 70px;
}

.e-tv-btn{
    display: flex;
    font-size: 20px;
    gap: 5px;
}

.e-tv-btn a{
    text-decoration: none;
    color: white;
    font-weight: 400;
}

.sign-in{
    margin-top: -5px;
}

.sign-in .flex{
    color: white;
    padding: 7.5px 20px;
    background-color: black;
    border-radius: 10px;
    cursor: pointer
}

.sign-in i{
    margin-right: 10px;
}

.register {
    margin-top: 35px;
    cursor: pointer;
}

.register span{
    margin-left: 5px;
    color: white;
    padding: 10px 20px;
    background-color: blue;
    border-radius: 10px;
}


/* RESPONSIVIDADE TABLET */
@media(max-width: 1100px){
    .logo-nav img{
        width: 200px;
    }

    .e-tv{
        display: none;
    }

    .sign-in{
        font-size: 15px;
    }

    .register{
        font-size: 15px;
    }
}

@media(max-width: 950px){

    .logo-nav{
        order: 2;
    }

    .menu-nav{
        display: flex;
        flex-direction: column;
        order: 1;
    }

    .flex{
        flex-direction: column;
    }

    .e-tv-btn{
        display: flex;
        flex-direction: column;
    }

    .sign-in .flex{
        flex-direction: row;
        margin-left: 5px;
    }

    .menu-hamburger {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        z-index: 100000;
        justify-content: center;
    }

    .menu-hamburger .bar {
        width: 25px;
        height: 3px;
        background: #0039f3;
        margin: 4px 0;
        transition: all 0.3s;
    }

    .menu-nav.menu-nav-open{
        position: fixed;
        z-index: 100;
        width: 40vw;
        height: 100vh;
        left: 0;
        background: #fff;
        box-shadow: 10px 0px 69px 0px rgba(0, 0, 0, 0.59);
    }

    .menu-nav.menu-nav-close{
        display: none;
        width: 0vw;
    }
}

`
