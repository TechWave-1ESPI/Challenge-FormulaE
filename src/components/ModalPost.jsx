// Imports de Ícones
import { BsPencilFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

// Imports de React
import { useState, useEffect } from "react";
import { ModalPostStyle } from '../css/ModalPostStyle'; // Certifique-se de que o caminho está correto

// Importe uma imagem de teste para o avatar
import DefaultUserImg from '../assets/user-pics/defaultUser.png'; // Substitua pelo caminho correto

const FloatingButton = ({ addPost }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [userImage, setUserImage] = useState(DefaultUserImg); // Imagem padrão do usuário
    const [postText, setPostText] = useState(""); // Para armazenar o texto do post

    // Função para abrir e fechar o modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        // Recupera o nome do usuário do sessionStorage
        const usuarioLogado = sessionStorage.getItem("usuario");
        if (usuarioLogado) {
            setUserName(usuarioLogado); // Ajuste isso conforme necessário
        }
    }, []);

    // Função para adicionar o post
    const handlePost = () => {
        if (postText.trim() !== "") {
            addPost({
                id: Date.now(), // Gera um ID único baseado no timestamp
                user: userName,
                time: 'Just now', // Pode ajustar para melhorar a exibição
                text: postText,
                likes: 0,
                liked: false,
                disliked: false,
                image: userImage,
            });
            setPostText(""); // Limpa o campo de texto após o post
            toggleModal(); // Fecha o modal
        }
    };

    return (
        <ModalPostStyle>
            <div className="floating-button" onClick={toggleModal}>
                <BsPencilFill size={24} className="icon" />
            </div>

            {isModalOpen && (
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="top-part">
                            <div className="user-info">
                                <img src={userImage} alt="user pic" className="user-avatar" />
                                <div className="text-top-part">
                                    <h2>{userName}</h2>
                                    <h4>Post to anyone</h4>
                                </div>
                                <IoMdArrowDropdown className="info-icon" />
                            </div>
                            <div className="close-top-part" onClick={toggleModal}>
                                <IoClose />
                            </div>
                        </div>

                        <textarea
                            placeholder="What do you want to talk about?"
                            className="post-textarea"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                        />
                        <hr />
                        <div className="modal-actions">
                            <FaRegClock className="clock-icon" />
                            <button className="post-btn" onClick={handlePost}>Post</button>
                        </div>
                    </div>
                </div>
            )}
        </ModalPostStyle>
    );
};

export default FloatingButton;
