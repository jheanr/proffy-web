import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const SignIn: React.FC = () => {
  return (
    <div id="page-sign-in">
      <div id="page-sign-in-proffy">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>

      <div id="page-sign-in-content">
        <h1>Fazer login</h1>

        <form>
          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" placeholder="E-mail" />
          </div>

          <div className="input-box">
            <label htmlFor="senha">Senha</label>
            <input type="text" name="senha" id="senha" placeholder="Senha" />
          </div>

          <div className="password-content">
            <div className="checkbox-box">
              <input type="checkbox" name="remember_me" id="remember_me" />
              <label htmlFor="remember_me">Lembrar-me</label>
            </div>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <div className="footer-content">
          <span>
            Não tem conta?
            <br />
            <Link to="/register">Cadastre-se</Link>
          </span>

          <span>
            É de graça
            <img src={purpleHeartIcon} alt="Purple heart" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
