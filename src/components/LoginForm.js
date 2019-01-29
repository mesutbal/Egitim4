import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux'; 
import { Card, CardSection } from './ortak';
import Input from './Input';


class LoginForm extends Component {
    state = { email: 'eyupcandundar@gmail.com', password: '123456' };

    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onGirisBasarili.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onGirisBasarili.bind(this))
            .catch(this.onGirisHatali.bind(this));
        });
    }
    onGirisBasarili() {
        Actions.home();
    }
    onGirisHatali() {
        Alert.alert('React Native', 'Kullanıcı adı ve / veya şifreniz hatalıdır !');
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@mail.com"
                        label="EMail"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Şifre"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <CardSection>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
                        <Text style={styles.textStyle}>Giriş Yap</Text>
                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({ 
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default LoginForm;

