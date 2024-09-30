import styled from 'styled-components'

export const RulesSyle = styled.section `
    .rules-title h2{
        margin-top: 20px;
        font-weight: 500;
        margin-bottom: 100px;
    }

    section.rules h2 span{
        color: #0000FF;
    }

    .rules-content .flex{
        gap: 20px;
    }

    .rules-content .card{
        margin-top: 50px;
    }

    .rules-content img{
        width: 700px;
        border-radius: 10px;
    }

    .rules-text h3{
        font-size: 30px;
    }

    .rules-text p{
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
            padding: 50px;
        }   

        .rules-content img{
            width: 650px;
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

    @media screen and (max-width: 600px){
        .flex{
            flex-direction: column;
        }
        .rules-content img{
            margin-left: 5%;
            width: 350px;
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
