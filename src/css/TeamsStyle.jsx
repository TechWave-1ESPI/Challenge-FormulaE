import styled from 'styled-components'



export const TeamsStyle = styled.section `
    section{
        cursor: pointer;
    }

    .teams-title{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .teams-title span{
        color: blue;
    }

    section img{
        border-radius: 20px;
        width: 400px;
    }
    
    .slick-slide div{
        margin: 0 1rem;
    }

    .box{
        max-width: 400px;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #d1d1d1; /* Default color */
    }

    .slick-dots li.slick-active button:before {
        color: blue; /* Active dot color */
    }

    

    @media screen and (max-width: 600px) {
    .teams-title {
        margin-left: 10px;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #e4e4e4; /* Default color */
    }

    .slick-dots li.slick-active button:before {
        color: blue; /* Active dot color */
    }

    
    }

`