import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { fetchTop10Users } from './dashboardSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';

const Dashboard = () => {

    const dispatch = useAppDispatch()

    const top10UsersArr = useAppSelector((state) => state.dashboard.top10Users)
  
    useEffect(() => {
      dispatch(fetchTop10Users())
    }, []);

  
    return (
      <View style={styles.container}>
        <Text>fetch top 10 users</Text>
        <Text>{top10UsersArr.length != 0 ? top10UsersArr[0].name : "Nothing to Show"}</Text>
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
  
  export default Dashboard;