import { RootState } from '../../redux/store';
import React from 'react';
import { View, Button, Alert, StyleSheet, AppState, Text } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import { login } from './authSlice';

const LoginScreen = () => {

    const dispatch = useDispatch()
    const token = useSelector((state:RootState)=>state.auth.token)

  const handlePress = () => {
    dispatch(login("abcd"))
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