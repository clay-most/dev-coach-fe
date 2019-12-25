import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import PrivateRoute from './utils/PrivateRoute';
import LoginForm from './components/Forms/LoginForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from './components/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';
import Marketplace from './components/Marketplace';
import Landing from './components/Landing';
import InterviewerForm from './components/Forms/InterviewerForm';
import StudentForm from './components/Forms/StudentForm';
import UserTypePage from './components/UserType/UserTypePage';

function App(props) {
  const routes = (
    <Switch>
      <Route path={'/dashboard'} component={UserDashboard} />
      <Route path={'/marketplace'} component={Marketplace} />
      <Route path={'/faq'} component={Marketplace} />
      <Route path={'/feedback'} component={Marketplace} />
      <Route path={'/settings'} component={Marketplace} />
    </Switch>
  );
  return props.isLoggedIn ? (
    <Dashboard routes={routes} />
  ) : (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/login/' component={LoginForm} />
        <Route path='/register' component={SignUpForm} />
        <Route path='/interviewer' component={InterviewerForm} />
        <Route path='/student' component={StudentForm} />
        <Route path='/user/type' component={UserTypePage} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
