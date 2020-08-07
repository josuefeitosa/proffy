import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeachersList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader text="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Matéria
              <input type="text" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">
              Dia da semana
              <input type="text" id="week_day" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="time">
              Hora
              <input type="text" id="time" />
            </label>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeachersList;
