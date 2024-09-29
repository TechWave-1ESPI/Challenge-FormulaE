import { MdCancel } from "react-icons/md";
import { useParams, Link,useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { UsuarioStyle } from "../css/UsuarioStyle";

const Usuario=()=>{
    
    let {id} =useParams();

   
    const [usuarios,setUsuarios]=useState({
        id,
        usuario:'',
        senha:''
    });

    
    const navigate = useNavigate();

    
    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
    }

    
    let metodo ="post"
    if(id){
        metodo="put"
    }

    
    const handleSubmit=(e)=>{
        
        e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${id ? id: ''}` ,{
        method:metodo,
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarios),    
        
    }).then(()=>{
       
        navigate("/login");
    })
    };

    
    useEffect(()=>{
        if(id) {
        fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setUsuarios(data);
        });
    }
     },[id])

    return (
        <UsuarioStyle>
        <section className="container-usuario">
            <div className="usuario-content">
                <h1 className="titulo-usuario">Cadastro de Usuários</h1>
                <form className="usuario-form" onSubmit={handleSubmit}>
                <div className="w-input">
                    <input
                    type="text"
                    name="usuario"
                    value={usuarios.usuario}
                    placeholder="Digite seu usuário"
                    className="input-form"
                    onChange={handleChange}
                    />
                </div>

                <div className="w-input">
                    <input
                    type="password"
                    name="senha"
                    value={usuarios.senha}
                    placeholder="Digite sua senha"
                    className="input-form"
                    onChange={handleChange}
                    />
                </div>

                <div className="usuario-btn">
                    <button type="submit" className="usuario-form-btn">Cadastrar</button>
                </div>

                <div className="usuario-cancel">
                    <Link to="/login" className="cancel-link">
                    <MdCancel />
                    </Link>
                </div>
                </form>
            </div>
    </section>
    </UsuarioStyle>
    )
}
export default Usuario