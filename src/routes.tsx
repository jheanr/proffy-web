import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SignInSuccess from './pages/SignInSuccess';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/sign-in-success" component={SignInSuccess} />
    </BrowserRouter>
  );
}

export default Routes;