import React from 'react';

import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ControlsScreen from '../ControlsScreen/ControlsScreen';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    const navigateToMainPage = () => navigation.navigate('controlsScreen');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigateToMainPage();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleOnChangeName = text => setName(text);

  const handleOnChangeEmail = text => setEmail(text);

  const handleOnChangePassword = text => setPassword(text);

  const handleOnPressNavigate = () => navigation.navigate('signInScreen');
  return (
    <View style={styles.container}>
      <View style={styles.signSection}>
        <TouchableOpacity onPress={handleOnPressNavigate}>
          <Text style={styles.signBtn}>Вход</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.signBtn, styles.signBtnActive]}>
            Регистрация
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Почта"
          value={email}
          onChangeText={handleOnChangeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={handleOnChangePassword}
        />
      </View>
      <TouchableOpacity style={styles.btnSign} onPress={signInUser}>
        <Text style={styles.textBtn}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    // alignItems: 'center',
  },

  inputContainer: {
    width: '80%',
  },

  signSection: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  signBtn: {
    fontSize: 36,
    color: '#afafaf',
  },

  signBtnActive: {
    color: '#000000',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },

  input: {
    backgroundColor: '#ffffff',
    // width: '80%',
    padding: 13,
    marginBottom: 24,
    borderRadius: 10,
  },

  btnSign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBB00',
    width: 320,
    padding: 13,
    marginBottom: 24,
    borderRadius: 10,
  },
  textBtn: {
    color: '#ffffff',
  },
});

export default SignUpScreen;
