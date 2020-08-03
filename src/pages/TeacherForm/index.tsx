import React from 'react';

import './styles.css';

import PageHeadear from '../../components/PageHeader';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeadear title="Que incrível que você quer dar aulas."/>
    </div>
  );
}

export default TeacherForm;