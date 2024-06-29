import { RootState } from '../../redux/store';
import React, { useEffect } from 'react';
import { View, Button, Alert, StyleSheet, AppState, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginPost } from './authSlice';
import { useAppDispatch } from '../../hooks/hook';
import { InputTextbox } from '../../components/InputTextbox';
import CheckBox from '@react-native-community/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

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
    // Parent View
    <View className='flex-1 flex-col justify-between bg-white px-4 py-8'> 
      {/* View 1 */}
      <View className='h-full pt-14'>
         {/* section 1 */}
        <View className='mb-9'>
          <Text className='font-extrabold text-2xl text-black'>Hi, Welcome Back!</Text>
          <Text className='text-base text-gray-500'>Hello again, you've been missed</Text>
        </View>
        
        {/* section 2 */}
        <View>
          <InputTextbox label={"Email Address"}></InputTextbox>
          <InputTextbox label={"Password"}></InputTextbox>
        </View>

        {/* section 3 */}
        <View className='flex-row justify-between items-center'>
          {/* view of checkbox */}
          <View className='flex-row items-center -mx-2'>
            <CheckBox
              disabled={false}
              // value={toggleCheckBox}
              // onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text className='text-black'>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className='text-black'>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* section 4 */}
        <View className='mt-14'>
          <TouchableOpacity className='bg-black p-3.5'>
            <Text className='text-center text-white uppercase'>Login</Text>
          </TouchableOpacity>
        </View>

        {/* section 5 */}
        <View className="flex flex-col items-center mt-8">
          <View className="flex-row items-center w-full mb-4">
            <View className="flex-1 h-0.5 bg-gray-400" />
            <Text className="mx-2 text-gray-500">OR</Text>
            <View className="flex-1 h-0.5 bg-gray-400" />
          </View>
          <View className="flex-row justify-between space-x-4">
            <TouchableOpacity className="flex-row w-1/2 items-center justify-center bg-white border border-gray-400 rounded p-2 shadow">
              <FontAwesomeIcon icon={faFacebook} size={20} color="blue" />
              <Text className="ml-2 font-semibold text-black">Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row w-1/2 items-center justify-center bg-white border border-gray-400 rounded p-2 shadow">
              <FontAwesomeIcon icon={faGoogle} size={20} color="red" />
              <Text className="ml-2 font-semibold text-black">Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* View 2 */}  
      <View className='flex-row justify-center'>
        <Text className='mr-1.5'>Don't have an account?</Text>
        <TouchableOpacity>
          <Text className='font-bold text-black'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LoginScreen;