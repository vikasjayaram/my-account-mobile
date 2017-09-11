import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene>
      <Scene key="login" component={LoginForm} title="Please Login" initial />
      <Scene key="home" component={Home} title="MyAccount Home" />
    </Scene>
    </Router>
  );
};

export default RouterComponent;
