import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.content}>
        An accomplished and detail-oriented React Native and iOS Developer with
        over 8 years of professional experience in building and deploying
        high-quality mobile applications. With a strong foundation in both
        native iOS development (Swift, Objective-C) and cross-platform
        technologies (React Native), I specialize in delivering robust and
        scalable mobile solutions that provide seamless user experiences across
        both iOS and Android platforms.
      </Text>
    </View>
  );
};
