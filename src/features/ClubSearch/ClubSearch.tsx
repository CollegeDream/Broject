import { RootState } from '../../redux/store';
import React, { useEffect, useRef } from 'react';
import { View, Button, Alert, StyleSheet, AppState, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hook';
import { CustomInputTextbox } from '../../components/InputTextbox';
import CheckBox from '@react-native-community/checkbox';
import { CustomMap } from './components/Map';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const ClubSearchScreen = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <View className=''>
            <CustomMap/>
        </View>
    )
}

export default ClubSearchScreen