import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI',
        }}
      />
      <View style={styles.headerContentContainer}>
        <Text style={styles.userName}>Dheeraj Singh</Text>
        <Text style={styles.email}>dheeraj.bartwal91@gmail.com</Text>
      </View>
    </View>
  );
};
