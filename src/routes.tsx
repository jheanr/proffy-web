import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import SignInSuccess from './pages/SignInSuccess';
import ForgotPasswordSuccess from './pages/ForgotPasswordSuccess';
import ProfileSuccess from './pages/ProfileSuccess';
import SignIn from './pages/SignIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/sign-in-success" component={SignInSuccess} />
      <Route
        path="/forgot-password-success"
        component={ForgotPasswordSuccess}
      />
      <Route path="/profile-success" component={ProfileSuccess} />
    </BrowserRouter>
  );
};

export default Routes;
