import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const topics = [
  { title: 'Kenali IMS yuk jadi lebih paham', screen: 'KenaliIMS' },
  { title: 'Cegah IMS jaga diri dan orang tersayang', screen: 'CegahIMS' },
  { title: 'Dukung, dengarkan, dampingi', screen: 'DukungIMS' },
  { title: 'Uji Resiko IMS Pribadi', screen: 'Chatbot' },
];

const screenWidth = Dimensions.get('window').width;
const CARD_MARGIN = 12;
const CARD_WIDTH = (screenWidth - CARD_MARGIN * 3) / 2;

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const renderCard = ({ item }: any) => (
    <TouchableOpacity
      className="bg-white rounded-xl p-4 mb-4 shadow-md border-l-4"
      style={{ width: CARD_WIDTH, borderLeftColor: '#B4E50D' }}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text className="text-sm font-semibold text-gray-800">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-gray-100 px-4 pt-8">
      <Text className="text-2xl font-bold text-center text-gray-900 mb-6">
        Selamat Datang di IMS App
      </Text>

      <FlatList
        data={topics}
        renderItem={renderCard}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
