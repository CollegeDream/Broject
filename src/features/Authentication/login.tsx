import { RootState } from '../../redux/store';
import React, { useEffect } from 'react';
import { View, Button, Alert, StyleSheet, AppState, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginPost } from './authSlice';
import { useAppDispatch } from '../../hooks/hook';

const LoginScreen = () => {

  const dispatch = useAppDispatch()
  const token = useSelector((state: RootState) => state.auth.token)

  // useEffect(() => {
  //   dispatch(loginPost({
  //     username: "test",
  //     password: "1234"
  //   }))
  // }, []);

  const handlePress = () => {
    dispatch(loginPost({
      username: "tienloc",
      password: "12345678"
    }));
    Alert.alert('Button Pressed!', 'You have pressed the button.');
  };

  return (
    <View style={styles.container}>
      <Text>{token}</Text>
      <Button
        title="Press Me"
        onPress={handlePress}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;