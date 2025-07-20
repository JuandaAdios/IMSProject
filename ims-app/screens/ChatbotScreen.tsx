import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/types';

type Props = BottomTabScreenProps<RootTabParamList, 'ChatBot'>;

export default function ChatBotScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Halaman ChatBot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});
