import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Card, CardSection, Header } from './ortak';
import Input from './Input'

class LoginForm extends Component {
    state = { email: 'eyupcandundar@gmail.com', password: '' };
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
            </Card>
        );
    }
}

export default LoginForm;

