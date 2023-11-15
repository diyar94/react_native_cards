import React from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
        overlayColor="rgba(0, 0, 0, 0.5)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default LoadingScreen;
