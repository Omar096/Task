import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, ImageBackground} from 'react-native';
import Card from '../components/Card';

function ModelScreen(props) {
 const data = [
   {Name: 'Printer HS', img: require('../../assets/Printer.png'), index: 1},
   {Name: 'LCD XS', img: require('../../assets/Lcd.png'), index: 3},
   {Name: 'Laptops', img: require('../../assets/Laptop.png'), index: 2},
   {Name: 'Printer Inc', img: require('../../assets/PrinterInc.png'), index: 4},
 ];
 const [list, setList] = useState(data);
 const getFilteredShips = txt => {
   const output = data.filter(s => s.Name.includes(txt));
   setList(output);
 };
 return (
   <View style={styles.container}>
     <View style={styles.sectionStyle}>
       <TextInput
         style={{color: '#B4B4B4', fontSize: 14}}
         placeholderTextColor={'#B4B4B4'}
         placeholder="Type to Search"
         onChangeText={txt => getFilteredShips(txt)}
       />
       <ImageBackground
         source={require('../../assets/scan.png')}
         style={{width: 26, height: 18}}
       />
     </View>
     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
       {list.map(item => (item.index % 2 == '1' ? <Card item={item} /> : null))}
     </View>
     <View
       style={{
         height: 1,
         backgroundColor: '#DEDEDE',
         width: '90%',
         marginBottom: 23,
       }}></View>
     <View
       style={{
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
       {list.map(item => (item.index % 2 == '0' ? <Card item={item} /> : null))}
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderColor: '#CBCBCA',
    borderWidth: 0.5,
    height: 50,
    borderRadius: 5,
    margin: 10,
    width: '90%',
    borderRadius: 35,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
export default ModelScreen;