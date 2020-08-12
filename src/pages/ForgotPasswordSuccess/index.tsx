import React from 'react';
import PageSuccess from '../../components/PageSuccess';

const ForgotPasswordSuccess: React.FC = () => {
  return (
    <PageSuccess
      title="Redefinição enviada!"
      description={
        'Boa, agora é só chegar o e-mail que foi enviado para você\nredefinir sua senha e aproveitar os estudos.'
      }
      link="/"
      textLink="Voltar ao login"
    />
  );
};

export default ForgotPasswordSuccess;
