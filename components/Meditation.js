import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const Meditation = () => {
  return (
    <ImageBackground
      source={require('/Users/simal/Desktop/Mobile-app/Practice/practice/pictures/Med.gif')}
      style={styles.background}
      resizeMode="cover"
    >
      <View>
        <Text></Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Meditation;
