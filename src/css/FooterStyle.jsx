import styled from "styled-components"

export const FooterStyle = styled.section`

#footer{
    margin-top: 100px;
    box-shadow: 0 0 8px #1919193e;
}

img{
    width: 350px;
}

#redirection{
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2rem;
}

#links{
    display: flex;
    gap: 5rem;
    height: 80%;
    align-items: center;
}

#links ul li{
    list-style: none;
    font-size: 19px;
    color: black;
    padding-bottom: 7px;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 1.3px;
}

#links ul li:hover{
    color: var(--azul-logo);
}

.link{
    text-decoration: none;
    color: black;
}

.link:hover{
    color: var(--azul-logo);
}

#newsletter{
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#text-newsletter h1{
    font-size: 36px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: black;
}

span{
    color: var(--azul-logo);
}

#text-newsletter p{
    font-size: 14px;
    color: black;
}

#input-newsletter input{
    width: 80%;
    border: none;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
    background-color: transparent;
    font-size: 14px;
    outline: none;
    color: black;
}

#input-newsletter button{
    width: 15%;
    height: 100%;
    background-color: black;
    border: 7px solid black;
    margin-left: 4%;
    border-radius: 2px;
    font-size: 20px;
    cursor: pointer;
    color: white;
    text-align: center;
    transition: 0.3s ease;
}

#input-newsletter button:hover{
    background-color: var(--azul-logo);
    border: 7px solid var(--azul-logo);
}

#termos-autorizacao{
    display: flex;
    height: 8vh;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding: 0 6%;
}

#termos-autorizacao ul li{
    list-style: none;
}

#cookies{
    display: flex;
    gap: 20px;
}

#cookies li{
    cursor: pointer;
}

@media(max-width: 800px) {
    #footer{
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #footer img{
        height: 100px;
    }

    #redirection{
        flex-direction: column;
        justify-content: space-between;
        height: 70vh;
    }

    #newsletter{
        order: 1;
    }

    #links{
        order: 2;
    }

    #termos-autorizacao{
        font-size: 10px;
    }
}

`