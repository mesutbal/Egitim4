import React, { Component } from 'react';
//import firebase from 'firebase';
import firebase from '@firebase/app';

import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';


export default class App extends Component {

  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBOMQOBRRLQjO_T_JKyepSrX2XQ0d6iF34',
      authDomain: 'egitim2-3dbcd.firebaseapp.com',
      databaseURL: 'https://egitim2-3dbcd.firebaseio.com',
      projectId: 'egitim2-3dbcd',
      storageBucket: 'egitim2-3dbcd.appspot.com',
      messagingSenderId: '61754865901'
    });
  }

  render() {
    return (<Router>
      <Scene key="root">
        <Scene 
          key="login"
          component={LoginScreen}
          title="Kullanıcı Girişi"
          initial
          hideNavBar
        />
        <Scene
         type="reset" 
          key="home"
          component={MainScreen}
          title="React Native"
        />
      </Scene>
    </Router>);
  }
}
