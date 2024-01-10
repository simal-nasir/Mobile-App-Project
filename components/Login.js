import { useState } from "react";
import { Alert, Button, TextInput, View ,StyleSheet,ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigation = useNavigation();

    const loginHandler = () => {
        if (username == 'Admin' && password == '12345') {
            navigation.navigate('Home',{username});
        }
        else if (username == 'Sim' && password == '12345') {
            navigation.navigate('Home',{username});
        }
        else {
            Alert.alert('Incorrect username and password');
        }
    }
    return(
        <ImageBackground
        source={require('/Users/simal/Desktop/Mobile-app/Practice/practice/pictures/BPic.jpeg')}
        style={styles.backgroundImage}
    >
        <View style ={styles.container}>

            <TextInput 
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
            // style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
            style={styles.input}
            />
            <TextInput 
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            // style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
            style={styles.input}
            />
            <Button title="Login" onPress={loginHandler} />
        </View>
        </ImageBackground>
    )
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        borderBlockColor: 'white'
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: 200,
        backgroundColor: 'white', // If you want to add a background color to text inputs
} })