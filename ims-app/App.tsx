import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ChatBotScreen from './screens/ChatbotScreen';
import DoctorChatScreen from './screens/ChatDoctorScreen';
import { RootTabParamList } from './types/types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ChatBot" component={ChatBotScreen} />
        <Tab.Screen name="ChatDoctor" component={DoctorChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}