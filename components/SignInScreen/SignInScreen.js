import React from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    const navigateToMainPage = () => navigation.navigate('controlsScreen');

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        navigateToMainPage();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOnChangeEmail = text => setEmail(text);

  const handleOnChangePassword = text => setPassword(text);

  const handleOnPressNavigate = () => navigation.navigate('signUpScreen');
  return (
    <View style={styles.container}>
      <View style={styles.signSection}>
        <TouchableOpacity>
          <Text style={[styles.signBtn, styles.signBtnActive]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnPressNavigate}>
          <Text style={styles.signBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleOnChangeEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handleOnChangePassword}
        />
      </View>
      <TouchableOpacity style={styles.btnSign} onPress={signInUser}>
        <Text style={styles.textBtn}>Sign In</Text>
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
    backgroundColor: '#ffffff',
    // alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
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

  input: {
    backgroundColor: '#ffffff',
    // width: '80%',
    paddingVertical: 13,
    paddingHorizontal: 32,
    marginBottom: 24,
    borderRadius: 15,
    borderColor: '#ADADAD',
    borderWidth: 1,
  },

  btnSign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBB00',

    width: 320,
    padding: 13,
    marginBottom: 24,
    borderRadius: 15,
  },
  textBtn: {
    color: '#ffffff',
  },
});

export default SignInScreen;
