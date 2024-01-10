import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cycling = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isCycling, setIsCycling] = useState(false);

  useEffect(() => {
    let timer;

    if (isCycling) {
      setStartTime(Date.now() - elapsedTime);
      timer = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTime);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isCycling, elapsedTime, startTime]);

  const handleStart = () => {
    setIsCycling(true);
    setStartTime(Date.now());
  };

  const handlePause = () => {
    setIsCycling(false);
  };

  const handleReset = () => {
    setIsCycling(false);
    setStartTime(null);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>
      <View style={styles.buttonsContainer}>
        {!isCycling ? (
          <Button title="Start" onPress={handleStart} />
        ) : (
          <Button title="Pause" onPress={handlePause} />
        )}
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 50,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default Cycling;
