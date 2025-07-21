import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import DoctorScreen from '../screens/DoctorScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import KenaliIMSScreen from '../screens/KenaliIMS';
import CegahIMSScreen from '../screens/CegahIMS';
import DukungIMSScreen from '../screens/DukungIMS';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="KenaliIMS" component={KenaliIMSScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="CegahIMS" component={CegahIMSScreen} options={{ tabBarButton: () => null }} />
        <Tab.Screen name="DukungIMS" component={DukungIMSScreen} options={{ tabBarButton: () => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
