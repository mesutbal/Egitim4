import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../components/ortak/Header';
import LoginForm from '../components/LoginForm';

export default class MainScreen extends Component {

    render() {
        return (<View>
            <Header>Kullanıcı Girişi</Header>
            <LoginForm />
          </View>);
    }
}
