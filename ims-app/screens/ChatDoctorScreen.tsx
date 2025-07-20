import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/types';

type Props = BottomTabScreenProps<RootTabParamList, 'ChatDoctor'>;

export default function DoctorChatScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini Halaman Chat dengan Dokter</Text>
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
