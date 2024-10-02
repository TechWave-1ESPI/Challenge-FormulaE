// Images
import UserImg1 from '../assets/user-pics/user1.png';
import UserImg2 from '../assets/user-pics/user2.png';
import UserImg3 from '../assets/user-pics/user3.png';

// Icons
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

// CSS
import { ETvStyle } from '../css/ETvStyle';

// React
import { useEffect, useState } from "react";

// Footer
import Footer from '../components/Footer'

const ETv = () => {
    const [nomeUsuario, setNomeUsuario] = useState("");

    // Função para transformar o nome em Title Case
    const toTitleCase = (str) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    useEffect(() => {
        // Recupera o nome do usuário do sessionStorage
        const usuarioLogado = sessionStorage.getItem("usuario");
        if (usuarioLogado) {
            // Transforma o nome para Title Case antes de setar o estado
            setNomeUsuario(toTitleCase(usuarioLogado));
        }
    }, []);

    // Estado para os posts com imagens diferentes para cada usuário
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: 'João Hoffmann',
            time: '14 minutes ago',
            text: 'Essa corrida foi animal! Sério, o que vocês acharam da ultrapassagem que o Nick fez? 🔥',
            likes: 255,
            image: UserImg1,  // Adiciona a imagem do usuário
        },
        {
            id: 2,
            user: 'Luciana Ferreira',
            time: '21 minutes ago',
            text: 'A Mahindra melhorou muito da ultima temporada para cá, estou amando ❤️ #Mahindra',
            likes: 431,
            image: UserImg2,  // Adiciona a imagem do usuário
        },
        {
            id: 3,
            user: 'Carlos Silva',
            time: '30 minutes ago',
            text: 'A corrida de ontem foi épica! Vamos torcer mais para a Nissan!',
            likes: 107,
            image: UserImg3,  // Adiciona a imagem do usuário
        },
    ]);

    // Função para incrementar likes
    const handleLike = (id) => {
        setPosts(posts.map(post => 
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    return (
        <ETvStyle>
            <section>
                <div className="interface">
                    <h1 className='wellcome-phrase'>Olá, <span>{nomeUsuario}</span>! Seja bem-vindo à <span>E</span> TV.</h1>
                </div>
            </section>

            <div className="container-posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="top-part">
                            <div className="user-info">
                                {/* Substitui a imagem estática pela imagem específica de cada usuário */}
                                <img src={post.image} alt='profile-pic' className='user-img' />
                                <div className="user-name-and-time">
                                    <h3 className='user-name'>{post.user}</h3>
                                    <h4 className='text-time'>{post.time}</h4>
                                </div>
                            </div>
                            <BsThreeDots className='dots-icon' />
                        </div>

                        <hr className='separator' />

                        <div className="bottom-part">
                            <div className="post-text">
                                <p>{post.text}</p>
                            </div>

                            <div className="comment-part">
                                <div className="icons">
                                    <div className="like-icon">
                                    <span>{post.likes}</span>
                                    <div className="icon" onClick={() => handleLike(post.id)}><AiOutlineLike /> </div>
                                    </div>
                                    <div className="dislike-icon"><AiOutlineDislike /></div>
                                </div>
                                <div className="reply"><p>REPLY</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </ETvStyle>
    );
};

export default ETv;
