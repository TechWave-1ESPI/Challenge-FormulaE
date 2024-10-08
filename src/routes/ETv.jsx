// Imports de Imagens
import UserImg1 from '../assets/user-pics/user1.png';
import UserImg2 from '../assets/user-pics/user2.png';
import UserImg3 from '../assets/user-pics/user3.png';
import UserImg4 from '../assets/user-pics/user4.png';
import UserImg5 from '../assets/user-pics/user5.png';
import UserImg6 from '../assets/user-pics/user6.png';
import UserImg7 from '../assets/user-pics/user7.png';
import UserImg8 from '../assets/user-pics/user8.png';
import UserImg9 from '../assets/user-pics/user9.png';


// Imports de Ícones
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from "react-icons/ai";

// Import CSS
import { ETvStyle } from '../css/ETvStyle';

// Import de React
import { useEffect, useState } from "react";

// Footer
import Footer from '../components/Footer'

// Modal Post
import FloatingButton from '../components/ModalPost'

const ETv = () => {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [posts, setPosts] = useState([
        {
            id: 1,
            user: 'João Hoffmann',
            time: '14 minutes ago',
            text: 'Essa corrida foi animal! Sério, o que vocês acharam da ultrapassagem que o Nick fez? 🔥',
            likes: 345,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg1,
        },
        {
            id: 2,
            user: 'Luciana Ferreira',
            time: '21 minutes ago',
            text: 'A Mahindra melhorou muito da ultima temporada para cá, estou amando ❤️ #Mahindra',
            likes: 241,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg2,
        },
        {
            id: 3,
            user: 'Carlos Vieira',
            time: '30 minutes ago',
            text: 'A Nissan correu muito bem ontem, queremos ver mais disso! Bora Nissan',
            likes: 235,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg3,
        },
        {
            id: 4,
            user: 'Fernanda Lima',
            time: '45 minutes ago',
            text: 'Fugindo um pouco das corridas, mas essa nova rede social da Formula E ficou incriveeeel!! mas falando de corrida agora, estou impressionada com o desempenho da Jaguar nessa temporada! Eles estão dominando a pista 🏎️💨',
            likes: 198,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg8,
        },
        {
            id: 5,
            user: 'Ricardo Souza',
            time: '1 hour ago',
            text: 'Achei que a estratégia de pit stop da ERT foi excelente, mas eles perderam muito tempo no final. O que acharam?',
            likes: 174,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg5,
        },
        {
            id: 6,
            user: 'Patrícia Gomes',
            time: '2 hours ago',
            text: 'Finalmente a Penske voltou a ganhar alguma coisa! Essa vitória vai dar um gás na equipe para o resto da temporada ✨',
            likes: 267,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg9,
        },
        {
            id: 7,
            user: 'Gustavo Mendes',
            time: '3 hours ago',
            text: 'A Mercedes parece estar com problemas na bateria, eles precisam resolver isso rápido se quiserem voltar para o topo',
            likes: 150,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg4,
        },
        {
            id: 8,
            user: 'Julia Andrade',
            time: '4 hours ago',
            text: 'É emocionante ver como o campeonato está ficando mais competitivo, cada corrida é um desafio diferente hahaha',
            likes: 189,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg7,
        },
        {
            id: 9,
            user: 'Thiago Oliveira',
            time: '5 hours ago',
            text: 'O que foi aquilo no final da corrida? A disputa entre a Porsche e a McLaren foi de tirar o fôlego!',
            likes: 321,
            liked: false, // Estado para controlar se o usuário deu like
            disliked: false, // Estado para controlar se o usuário deu dislike
            image: UserImg6,
        }
    ]);

    // Função para adicionar um novo post
    const addPost = (newPost) => {
        setPosts([newPost, ...posts]); // Adiciona o novo post no topo da lista
    };

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

    // Função para dar ou remover like
    const handleLike = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                if (post.liked) {
                    return { ...post, likes: post.likes - 1, liked: false };
                }
                if (post.disliked) {
                    return { ...post, likes: post.likes + 1, liked: true, disliked: false };
                }
                return { ...post, likes: post.likes + 1, liked: true };
            }
            return post;
        }));
    };

    // Função para dar ou remover dislike
    const handleDislike = (id) => {
        setPosts(posts.map(post => {
            if (post.id === id) {
                if (post.disliked) {
                    return { ...post, disliked: false };
                }
                if (post.liked) {
                    return { ...post, likes: post.likes - 1, liked: false, disliked: true };
                }
                return { ...post, disliked: true };
            }
            return post;
        }));
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
                                    <div className="like-icon" onClick={() => handleLike(post.id)}>
                                        {post.liked ? (
                                            <AiFillLike style={{ color: 'blue' }} />
                                        ) : (
                                            <AiOutlineLike />
                                        )}
                                        <span className="like-count">{post.likes}</span>
                                    </div>
                                    <div className="dislike-icon" onClick={() => handleDislike(post.id)}>
                                        {post.disliked ? (
                                            <AiFillDislike style={{ color: 'red' }} />
                                        ) : (
                                            <AiOutlineDislike />
                                        )}
                                    </div>
                                </div>
                                <div className="reply"><p>REPLY</p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FloatingButton addPost={addPost} />
            <Footer/>
        </ETvStyle>
    );
};

export default ETv;