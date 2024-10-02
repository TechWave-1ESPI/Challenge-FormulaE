import styled from 'styled-components'

export const ModalPostStyle = styled.section`
/* Estilos para o botão flutuante */
    .floating-button {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: blue;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        z-index: 1000;
    }

    .floating-button .icon {
        color: white;
        font-size: 24px;
        z-index: 99;
    }

    /* Estilos para o container/modal */
    .modal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 98;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 740px; /* Aumente o valor aqui */
        width: 100%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .modal-content h2 {
        margin-top: 20px;
        font-weight: 600;
    }

    .modal-content h4{
        font-weight: 500;
        font-size: 15px;
        color: #4e4e4e;
    }

    .top-part{
        display: flex;
        justify-content: space-between;
    }

    .text-top-part{
        padding-left: 30px;
    }

    .user-info{
        padding: 10px;
        transition: 0.2s;
    }

    .user-info:hover{
        border-radius: 20px;
        background-color: #ececec;
    }

    .info-icon{
        cursor: pointer;
        padding-left: 2%;
        margin-top: 5px;
        font-size: 40px;
    }

    .close-top-part{
        cursor: pointer;
        font-size: 30px;
    }

    textarea{
        resize: none;
        padding: 20px;
        margin-left: 5px;
        width: 450px;
        height: 150px;
        font-size: 20px;
        border: none;
        outline: none;
        
    }

    .modal-actions{
        margin-top: 20px;
        display: flex;
        align-items: right;
        justify-content: right;
        gap: 20px;
    }

    .clock-icon{
        cursor: pointer;
        margin-top: 23px;
        font-size: 24px;
        color: #1f1f1f;
    }

    .modal-content button {
        margin-top: 20px;
        color: white;
        border: none;
        border-radius: 1.6rem;
        cursor: pointer;
    }


    .modal-actions .post-btn{
        padding: 6px 16px;
        font-size: 15px;
        background-color: blue;
        font-weight: 500;
    }

`