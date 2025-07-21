import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import DoctorScreen from '../screens/DoctorScreen';
import ProfileScreen from '../screens/ProfileScreen';
import KenaliIMSScreen from '../screens/KenaliIMS';
import CegahIMSScreen from '../screens/CegahIMS';
import DukungIMSScreen from '../screens/DukungIMS';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Chatbot') iconName = 'chatbubble';
          else if (route.name === 'Dokter') iconName = 'person-circle';
          else iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 255)',
          borderTopWidth: 0,
          position: 'absolute',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      <Tab.Screen name="Dokter" component={DoctorScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="KenaliIMS" component={KenaliIMSScreen} />
      <Stack.Screen name="CegahIMS" component={CegahIMSScreen} />
      <Stack.Screen name="DukungIMS" component={DukungIMSScreen} />
    </Stack.Navigator>
  );
}
