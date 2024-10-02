import styled from 'styled-components'

export const ETvStyle = styled.section `
    section{
        margin-top: 50px;
    }

    .wellcome-phrase{
        font-weight: 500;
        font-size: 30px;
    }

    .wellcome-phrase span{
        color: blue;
    }

    .container-posts{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
        
    }

    .post{
        box-shadow: 0 0 8px #19191929;;
        border-radius: 15px;
        padding: 20px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .post .top-part{
        display: flex;
        
    }

    .top-part img{
        width: 80px;
        height: auto;
        border-radius: 50%;
    }

    .top-part .user-info{
        display: flex;
    }

    .user-name-and-time{
        padding: 20px;
    }

    .text-time{
        padding-top: 3px;
        font-weight: 450;
        color: #838697;
    }

    .dots-icon{
        cursor: pointer;
        margin-left: 200px;
        font-size: 30px;
        color: #6a6c77;
    }
    
    .post-text{
        padding: 20px;
        max-width: 500px;
    }

    .separator{
        margin-top: 10px;
        opacity: 30%;
    }

    .comment-part{
        display: flex;
        gap: 10px;
        justify-content: space-between;
        color: #838697;
    }

    .icons{
        display: flex;
        gap: 20px;
        padding-left: 20px;
        font-size: 25px;
        padding-top: 5px;
        transition: 0.3s;
    }

    .like-icon, .dislike-icon{
        transition: 0.3s;
        cursor: pointer;
    }

    .like-icon{
        display: flex;
        gap: 5px;
    }

    .like-icon span{
        margin-top: 3px;
        font-size: 20px;
    }

    .like-icon .icon:hover{
        color: blue;
    }

    .dislike-icon:hover{
        color: red;
    }

    .reply{
        padding-top: 10px;
        cursor: pointer;
    }
`