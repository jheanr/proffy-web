import React from 'react';
import PageSuccess from '../../components/PageSuccess';

const SignInSuccess: React.FC = () => {
  return (
    <PageSuccess
      title="Cadastro concluído"
      description={
        'Agora você faz parte da plataforma da Proffy.\nTenha uma ótima experiência.'
      }
      link="/"
      textLink="Fazer login"
    />
  );
};

export default SignInSuccess;
