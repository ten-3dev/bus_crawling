import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import SearchScreen from './screens/SearchScreen';
import ViewScreen from './screens/ViewScreen';
import Context from './Context';
import Loading from './Loading/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import NetInfo from "@react-native-community/netinfo";
import {Alert, BackHandler} from 'react-native';

const Stack = createNativeStackNavigator();

const App = ()  => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => { 
    NetInfo.addEventListener(state => {
      if(!state.isConnected){
        Alert.alert("인터넷 연결 하셈;;", "이게 정신줄을 놓았나..", [
          {
            text: "종료",
            onPress: () => BackHandler.exitApp()
          }
        ]);
      }
    })
  }, [])

  const contextSetting = {
    setLoading: bool => {
      setLoading(bool);
    },
  };

  return (
    <Context.Provider value={contextSetting}>
      <SafeAreaView style={{flex: 1}}>
        <Loading loading={isLoading} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainScreen}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="View" component={ViewScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Context.Provider>
  );
};

export default App;
