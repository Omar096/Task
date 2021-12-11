import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Card({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ModelDetails')}>
      <View style={styles.CardStyle}>
        <View style={styles.ImgCard}>
          <Image
            source={item.img}
            resizeMode="contain"
            style={{width: 115, height: 115, backgroundColor: 'white'}}
          />
        </View>
        <Text
          style={{
            alignSelf: 'center',
            color: '#4E4E4E',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {item.Name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  CardStyle: {
    width: '100%',
    height: 114,
    flexDirection: 'column',
    marginBottom: 30,
    marginRight: 20,
    alignItems: 'center',
  },
  ImgCard: {
    width: 157,
    height: 114,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
  },
});
export default Card;
