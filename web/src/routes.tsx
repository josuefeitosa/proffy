import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/teachers" component={TeachersList} />
      <Route path="/teacher_form" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
