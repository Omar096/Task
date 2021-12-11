import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppButton from '../components/AppButton';

function PhotoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <AppButton title="Assets Inventory" />
      <AppButton title="Model" />
      <AppButton title="Person" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -390,
  },
});
export default PhotoScreen;
