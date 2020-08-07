import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader text="Que bom que você quer dar aulas." />
    </div>
  );
};

export default TeacherForm;
