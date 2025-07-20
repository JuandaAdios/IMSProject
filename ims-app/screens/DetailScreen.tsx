import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Home: undefined;
  ChatBot: undefined;
  ChatDoctor: undefined;
  DetailScreen: undefined;
};

type Props = BottomTabScreenProps<RootTabParamList, 'DetailScreen'>;

export default function DetailScreen({ navigation }: Props) {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Halaman detail</Text>
       </View>
  );
}
