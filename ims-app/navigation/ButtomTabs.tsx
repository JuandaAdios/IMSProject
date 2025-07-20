import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import DoctorChatScreen from '../screens/ChatDoctorScreen';
import { Ionicons } from '@expo/vector-icons';

export type RootTabParamList = {
  Home: undefined;
  ChatBot: undefined;
  ChatDoctor: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ChatBot') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ChatBot" component={ChatbotScreen} />
      <Tab.Screen name="ChatDoctor" component={DoctorChatScreen} />
    </Tab.Navigator>
  );
}
