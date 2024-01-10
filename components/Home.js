import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, ImageBackground } from 'react-native';

const Home = ({ route,navigation }) => {

  const { username } = route.params;
  const handleLogout = () => {
    // You can perform logout actions here if needed
    navigation.navigate('Login'); // Navigate back to the Login screen
  };

  const handleAbout = () => {
    navigation.navigate('Running');
  };

  const handleCycling = () => {
    navigation.navigate('Cycling');
  };

  const handleMeditation = () => {
    navigation.navigate('Meditation');
  };

  return (
    <ImageBackground
      source={require('/Users/simal/Desktop/Mobile-app/Practice/practice/pictures/home.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Hello, {username}</Text>
        <Text style={styles.title2}>Choose your Workout</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAbout}>
            <Text style={styles.buttonText}>Running</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCycling}>
            <Text style={styles.buttonText}>Cycling</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleMeditation}>
            <Text style={styles.buttonText}>Meditation</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Button title='Logout' onPress={handleLogout} />
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  button: {
    width: 300,
    height: 100,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 20,
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'Savoye LET',
  },
  title2: {
    fontSize: 35,
    fontFamily: 'Savoye LET',
  },
});

export default Home;
