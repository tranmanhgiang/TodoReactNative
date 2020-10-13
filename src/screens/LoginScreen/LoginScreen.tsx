import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import styles from './LoginScreenStyle';
import LoginButton from '../../components/LoginButton/LoginButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface User {
    username: string,
    password: string
}


function LoginScreen({ navigation }) {
    const [user, setUser] = React.useState<User>({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}></View>
            <View style={{ flex: 2 }}>
                <View style={styles.username}>
                    <TextInput
                        placeholder="UserName"
                        onChangeText={usernameInput => setUser({ ...user, username : usernameInput })}
                        value={user.username}
                    />
                </View>
                <View style={styles.password}>
                    <TextInput
                        secureTextEntry={showPassword ? false : true}
                        placeholder="Password"
                        style={styles.passwordInput}
                        onChangeText={passwordInput => setUser({ ...user, password: passwordInput })}
                        value={user.password}
                    />

                    <Icon style={ styles.icon }
                        name={showPassword ? "eye-slash" : 'eye'}
                        size={20} color='gray'
                        onPress={() => setShowPassword(!showPassword)} />

                </View>
                <View style={styles.login}>
                    <LoginButton
                        title="Login"
                        onPress={() => {
                            { (user.username === 'abc' && user.password === '123' ? navigation.navigate('Home', { user }) : Alert.alert('Username or password incorrect')) }
                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 2 }}></View>
        </View>
    );
}


export default LoginScreen;