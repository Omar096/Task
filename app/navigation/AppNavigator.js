import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhotoScreen from '../screens/PhotoScreen';
import ModelScreen from '../screens/ModelScreen';
import ModelDetails from '../screens/ModelDetails';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const AppNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{
          headerLargeStyle: {
            justifyContent: 'center',
          },
          headerStyle: {
            backgroundColor: '#DEDEDE',
          },
          headerTitleStyle: {
            alignItems: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 13.5,
              }}>
              <ImageBackground
                source={require('../../assets/arrow.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={{fontSize: 8, marginTop: -7}}> Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <ImageBackground
                source={require('../../assets/transaction-icon-gray.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{fontSize: 8}}> Process</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ModelScreen"
        component={ModelScreen}
        options={{
          title: 'Model',
          headerStyle: {
            backgroundColor: '#DEDEDE',
          },
          headerTintColor: '#4E4E4E',
          headerTitleStyle: {
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 13.5,
              }}>
              <ImageBackground
                source={require('../../assets/arrow.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={{fontSize: 8, marginTop: -5}}> Back</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ModelDetails"
        component={ModelDetails}
        options={{
          headerLargeStyle: {
            justifyContent: 'center',
          },
          headerStyle: {
            backgroundColor: '#DEDEDE',
          },
          headerTitleStyle: {
            alignItems: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 13.5,
              }}
              onPress={() => navigation.goBack()}>
              <ImageBackground
                source={require('../../assets/arrow.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={{fontSize: 8, marginTop: -7}}> Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                width: 59,
                height: 28,
                backgroundColor: '#fff',
                borderRadius: 12,
                borderColor: '#707070',
                borderWidth: 1,
              }}>
              <ImageBackground
                source={require('../../assets/edit-icon.png')}
                style={{width: 12, height: 12}}
              />
              <Text style={{fontSize: 10, color: '#707070'}}> Edit</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const AppNavigator = () => <AppNav></AppNav>;
export default AppNavigator;
