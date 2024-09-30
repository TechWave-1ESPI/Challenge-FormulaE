import styled from 'styled-components'



export const EcologySyle = styled.section `

    .ecology-title h2{
        margin-top: 20px;
        font-weight: 500;
        margin-bottom: 100px;
    }

    section.ecology h2 span{
        color: #0000FF;
    }

    .ecology-content .flex{
        gap: 20px;
    }

    .ecology-content .card{
        margin-top: 50px;
    }

    .ecology-content img{
        width: 700px;
        border-radius: 10px;
    }

    .ecology-text h3{
        font-size: 30px;
    }

    .ecology-text p{
        font-size: 18px;
        margin-top: 15%;
        text-align: justify;
    }

    .lastcard{
        padding-bottom: 30px;
    }
    @media screen and (max-width: 1280px){ 
        .rules-title{
            margin-left: 70px;
        }
        section.rules h2{
            margin-bottom: -50px;
        }

        .rules-content{
            padding: 100px;
        }   

        .rules-content img{
            width: 650px;
        }

        .footer{
            padding: 100px 0px;
        }
    }

    @media screen and (max-width: 884px){
        .rules-content img{
            width: 400px;
        }
    }

    @media screen and (max-width: 768px){
        .rules-content img{
            width: 350px;
        }
    }

    @media screen and (max-width: 428px){
        .flex{
            flex-direction: column;
        }
        .rules-content img{
            width: 300px;
        } 

        .card2{
            flex-direction: column-reverse;
        }

        .card4{
            flex-direction: column-reverse;
        }

        .rules-text h3{
            padding-bottom: 20px;
        }
    }
`