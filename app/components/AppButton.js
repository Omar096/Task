import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function AppButton({title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        title == 'Model' ? navigation.navigate('ModelScreen') : null
      }>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={
            title == 'Assets Inventory'
              ? require('../../assets/stock-file.png')
              : require('../../assets/vendor.png')
          }
          style={{width: 23, height: 24, marginLeft: -15}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#4E4E4E',
          }}>
          {title}
        </Text>
      </View>
      <ImageBackground
        source={require('../../assets/arrow-right-gray-4.png')}
        style={{width: 19, height: 12, marginRight: -15}}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 299,
    backgroundColor: '#EAEAEA',
    borderRadius: 38,
    marginBottom: 19.5,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default AppButton;
