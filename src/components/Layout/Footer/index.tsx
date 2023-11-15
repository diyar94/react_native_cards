import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Made by Diyar Osmanov</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    opacity: 0.7,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -13},
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  footerText: {
    fontSize: 12,
  },
});

export default Footer;
