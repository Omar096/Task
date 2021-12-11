import React from 'react';
import {Text} from 'react-native';
import {View, StyleSheet, Image} from 'react-native';
function RowText({left, right, img, head}) {
  return (
    <View style={styles.row}>
      {head && (
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 18,
            color: '#4E4E4E',
          }}>
          {head}
        </Text>
      )}
      {left && (
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'normal',
            fontSize: 16,
            color: '#4E4E4E',
          }}>
          {left}
        </Text>
      )}
      {img && (
        <Image
          source={require('../../assets/Info.png')}
          style={{width: 17.17, height: 11.45, marginRight: 7}}
        />
      )}
      {right && (
        <Text
          style={{
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: 15,
            color: '#4E4E4E',
          }}>
          {right}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  info: {
    marginTop: 20,
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});
export default RowText;
