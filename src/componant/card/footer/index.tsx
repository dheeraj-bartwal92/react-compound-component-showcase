import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';

export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>Email</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>Call</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
