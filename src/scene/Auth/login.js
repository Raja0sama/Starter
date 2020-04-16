import React, {useEffect, useState} from 'react';
import {Text, View,TextInput, Button} from 'react-native';
import {
  LoginWithEmailAndPassword,
  SignUpWithEmailAndPassword,
} from 'app/utils/Firebase/authentication';


const Login = ({params}) => {

  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  // Handle user state changes




  const login = () => {
    LoginWithEmailAndPassword('dks4mii@gmail.com', '123asd')
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const singup = () => {
    SignUpWithEmailAndPassword('dks4mii@gmail.com', '123asd')
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const loginwithPhoneNumber = async (numer) => {
      const confirmation = await LoginWithPhoneNumber(numer)
      setConfirm(confirmation);
  }
  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }


 if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => loginwithPhoneNumber('+92 305-1255646')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
};

export default Login;
