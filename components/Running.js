import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Running = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };

  return (
    <ImageBackground
      source={require('/Users/simal/Desktop/Mobile-app/Practice/practice/pictures/Run.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.title}>Start Your timer</Text>
      <View style={styles.container}>
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        
        <View style={styles.buttonsContainer}>
          {!isActive ? (
            <Button title="Start" onPress={handleStart} />
          ) : (
            <Button title="Pause" onPress={handlePause} />
          )}
          <Button title="Reset" onPress={handleReset} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // width: '100%',
    // height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  timerText: {
    fontSize: 50,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  title: {
    fontWeight:'bold',
    fontSize: 30,
    flex: 1,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Running;
