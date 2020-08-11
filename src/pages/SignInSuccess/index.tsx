import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

const SignInSuccess: React.FC = () => {
  return (
    <div id="page-sign-in-success">
      <div id="page-sign-in-success-content" className="container">
        <img src={successIcon} alt="Success icon" />

        <h2>Cadastro concluído</h2>

        <p>
          Agora você faz parte da plataforma da Proffy.
          <br />
          Tenha uma ótima experiência.
        </p>

        <Link to="/">Fazer login</Link>
      </div>
    </div>
  );
};

export default SignInSuccess;
