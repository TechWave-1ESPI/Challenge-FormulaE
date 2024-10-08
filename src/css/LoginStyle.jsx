import styled from 'styled-components'

export const LoginStyle = styled.section `

/* Estilo do container principal */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

/* Container do login */
.container-login {
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 850px;
  width: 100%;
}

/* Login */
.login {
  padding: 60px;
  width: 100%;
  max-width: 400px;
}


.login img {
  width: 450px;
  object-fit: cover;
  background-position: center;
  display: none;
}


@media (min-width: 768px) {
  .login img {
    display: block;
  }
}


@media (max-width: 768px) {
  .login img {
    display: none;
  }

  .container-login {
    flex-direction: column; 
    align-items: center; 
  }

  .login {
    padding: 40px; 
    max-width: 100%; 
  }
}

/* Formulário */
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.titulo-login {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

/* Estilo dos campos de entrada */
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

/* Botão de login */
.login-btn {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.login-form-btn {
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

.login-form-btn:hover {
  background-color: #0000FF;
  box-shadow: 0 4px 12px rgba(108, 99, 255, 0.3);
}

/* Lista de utilidades */
.utilidades {
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.utilidades li {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}

.utilidades .text1 {
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  align-items: center;
}

/* Estilo dos links */
.utilidades a {
  color: #3e4efe;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.utilidades a:hover {
  text-decoration: underline;
  color: #0000FF;
}

`