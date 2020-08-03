import React from 'react';

import './styles.css';

import PageHeadear from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeadear title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </PageHeadear>

      <main>
        <TeacherItem 
          avatar_url="https://avatars2.githubusercontent.com/u/41805594?s=460&u=1d20a3a10f2d9830f365525659f35fbd5cfd1393&v=4"
          name="Jhean Ramos"
          subject="Tank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi dolor blanditiis error fugit necessitatibus."
          price="R$ 80,00"
        />

        <TeacherItem 
          avatar_url="https://avatars2.githubusercontent.com/u/41805594?s=460&u=1d20a3a10f2d9830f365525659f35fbd5cfd1393&v=4"
          name="Jhean Ramos"
          subject="Tank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi dolor blanditiis error fugit necessitatibus."
          price="R$ 80,00"
        />

        <TeacherItem 
          avatar_url="https://avatars2.githubusercontent.com/u/41805594?s=460&u=1d20a3a10f2d9830f365525659f35fbd5cfd1393&v=4"
          name="Jhean Ramos"
          subject="Tank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sequi dolor blanditiis error fugit necessitatibus."
          price="R$ 80,00"
        />
      </main>
    </div>
  );
}

export default TeacherList;