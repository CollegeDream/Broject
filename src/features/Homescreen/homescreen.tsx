import { RootState } from '../../redux/store';
import React, { useEffect } from 'react';
import { View, Button, Alert, StyleSheet, AppState, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hook';
import { CustomInputTextbox } from '../../components/InputTextbox';
import CheckBox from '@react-native-community/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CustomTeamLogo } from '../../components/TeamLogo';
import { CustomPlayerRating } from '../../components/PlayerRating';
import { CustomSearchBar } from '../../components/Searchbar';
import { CustomPlayerValuePos } from '../../components/PlayerValuePos';

const HomeScreen = () => {

    return (
        // Parent view
        <View className='flex-1 px-3 justify-evenly'>
            {/* View 1 */}
            <View>
                <Text className='text-base text-gray-500'>Hello Me</Text>
                <Text className='font-extrabold text-2xl text-black'>Welcome back!</Text>
            </View>
            {/* View 2 */}
            <View>
                <CustomSearchBar></CustomSearchBar>
            </View>
            {/* View 3 */}
            <View>
                <Text className='text-xl text-black mb-2'>Recent Matches</Text>
                {/* Section 1 */}
                <View className='bg-gray-200 rounded-lg px-2 pt-2'>
                    <Text className='font-bold text-center my-4'>Champions League - Group Stage: Matchday 3</Text>
                    {/* Scores */}
                    <View className='flex-row justify-around pt-1'>
                        <CustomTeamLogo imageURL='https://1000logos.net/wp-content/uploads/2021/05/Juventus-logo.png' teamName='Juventus' style="w-12"></CustomTeamLogo>
                        <View className="items-center ">
                            <Text>2-1</Text>
                            <Text>Full Time</Text>
                        </View>
                        <CustomTeamLogo imageURL='https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Badge.png' teamName='Manchester United' style="w-12"></CustomTeamLogo>

                    </View>

                    {/* Player Ratings */}
                    <View className='border-t-[0.5px] border-b-[0.5px] px-2 py-4'>
                        <CustomPlayerRating imageURL='https://w7.pngwing.com/pngs/898/493/png-transparent-lionel-messi-2018-world-cup-argentina-national-football-team-fc-barcelona-lionel-messi-tshirt-blue-microphone-thumbnail.png' playerName='Messi' title='MVP' rating={9.7}></CustomPlayerRating>
                        <CustomPlayerRating imageURL='https://w7.pngwing.com/pngs/692/773/png-transparent-cristiano-ronaldo-portugal-national-football-team-real-madrid-c-f-football-player-athlete-heung-tshirt-arm-football-team-thumbnail.png' playerName='Ronaldo' title='Most Passes' rating={8.6}></CustomPlayerRating>
                    </View>
                    <View >
                        <TouchableOpacity className='py-4 items-center'>
                            <Text className='text-gray-600'>See full stats</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {/* Top Transfers */}
            <View className='flex-col'>
                <Text className='text-black text-xl mb-2'>Top Transfers</Text>
                <View className='flex-row justify-around pt-1 border-primary-200 rounded-lg border-2 mb-2 p-2 items-center'>
                    <CustomTeamLogo imageURL='https://reactnative.dev/img/tiny_logo.png' teamName='Manchester United' style="w-8"></CustomTeamLogo>
                    <CustomPlayerValuePos name="MBappe" position="striker" value='$100,000'></CustomPlayerValuePos>
                    <CustomTeamLogo imageURL='https://reactnative.dev/img/tiny_logo.png' teamName='Manchester United' style="w-8"></CustomTeamLogo>
                </View>
                <View className='flex-row justify-around pt-1  border-primary-200 rounded-lg border-2 mb-2 p-2 items-center'>
                    <CustomTeamLogo imageURL='https://reactnative.dev/img/tiny_logo.png' teamName='Manchester United' style="w-8"></CustomTeamLogo>
                    <CustomPlayerValuePos name="MBappe" position="striker" value='$100,000'></CustomPlayerValuePos>
                    <CustomTeamLogo imageURL='https://reactnative.dev/img/tiny_logo.png' teamName='Manchester United' style="w-8"></CustomTeamLogo>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen