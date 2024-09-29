import styled from 'styled-components'

export const UsuarioStyle = styled.section`

/* Container principal de cadastro */
.container-usuario {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Conteúdo do cadastro */
.usuario-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 60px; /* Aumentei o padding para dar mais espaço interno */
  max-width: 600px; /* Aumentei a largura máxima do container */
  width: 100%;
}

/* Título do cadastro */
.titulo-usuario {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

/* Formulário de cadastro */
.usuario-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

/* Campos de entrada */
.w-input {
  margin-bottom: 20px;
  position: relative;
}

.input-form {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #f9f9f9;
  transition: border 0.3s ease;
}

.input-form:focus {
  border-color: #6c63ff;
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
}

/* Botão de cadastro */
.usuario-btn {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.usuario-form-btn {
  background-color: #3e4efe;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.usuario-form-btn:hover {
  background-color: #0000FF;
  box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
}

/* Link de cancelamento */
.usuario-cancel {
  margin-top: 15px;
  text-align: center;
}

.cancel-link {
  color: #3e4efe;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.cancel-link:hover {
  text-decoration: underline;
  color: #0000FF;
}

`