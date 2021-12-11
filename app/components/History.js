import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import moment from 'moment';
const date = moment().format('MMMM Do YYYY, h:mm:ss a');
const renderCategory = ({item}) => {
  return (
    <View style={{marginLeft: 10, marginTop: 10}}>
      <Text style={{fontWeight: 'bold', color: '#4E4E4E', fontSize: 13}}>
        Jennifer Smith
      </Text>
      <Text style={{color: '#4E4E4E', fontSize: 9}}>{date}</Text>
      <Text style={{color: '#4E4E4E', fontSize: 12}}>{item.name}</Text>
    </View>
  );
};
function History({notes}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderCategory}
        key={cat => cat.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              borderColor: '#DEDEDE',
              width: '95%',
              marginTop: 10,
              alignSelf: 'center',
            }}></View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 310,
    marginBottom: 15,
    borderRadius: 19,
    marginTop: 5,
    flex: 1,
    padding: 5,
  },
});
export default History;
