import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { Header } from './src/components/ortak/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  render() {
    /*return (
      <View style={{ flex: 1 }}>
      <View style={{ flex: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
        <View style={{ width: 100, height: 50, backgroundColor: 'yellow' }} />
        <View style={{ flex: 1.5, backgroundColor: 'red' }} />
        <View style={{ flex: 8.569, backgroundColor: 'purple' }} />
        <View style={{ height: 50, backgroundColor: 'orange' }} />
      </View>
      <View style={{ flex: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
        <View style={{ width: 100, height: 50, backgroundColor: 'yellow' }} />
        <View style={{ flex: 1.5, backgroundColor: 'red' }} />
        <View style={{ flex: 8.569, backgroundColor: 'purple' }} />
        <View style={{ height: 50, backgroundColor: 'orange' }} />
      </View>
      </View>
    );*/
    /*return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'yellow' }}>
      <Button title="Alert Deneme 1" onPress={() => { Alert.alert('React Native', 'Merhaba Dünya !'); }} />
      <Button 
        title="Alert Deneme 2" 
        onPress={() => 
          { 
            Alert.alert(
                'React Native', 
                'Merhaba Dünya !',
                [
                  { text: 'Tamam', onPress: () => { Alert.alert('react native', 'tamam'); } },
                  { text: 'İptal', onPress: () => { Alert.alert('react native', 'iptal'); } }
                ]); 
          }} 
        />
    </View>);*/

    return (
    <View>
      <Header>Kullanıcı Girişi</Header>
      <LoginForm />
    </View>);
  }
}
