import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LargCard from '../components/LargeCard';
function ModelDetails(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <LargCard/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
export default ModelDetails;
