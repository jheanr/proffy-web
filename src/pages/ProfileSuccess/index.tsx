import React from 'react';
import PageSuccess from '../../components/PageSuccess';

const ProfileSuccess: React.FC = () => {
  return (
    <PageSuccess
      title="Cadastro salvo!"
      description={
        'Tudo certo, seu cadastro está na nossa lista de professores.\nAgora é só ficar de olho no seu WhatsApp.'
      }
      link="/"
      textLink="Acessar lista"
    />
  );
};

export default ProfileSuccess;
