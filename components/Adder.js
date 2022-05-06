import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Text, View, Image, Touchable, Alert, TextInput, TouchableWithoutFeedback } from 'react-native';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import styles from '../Styles';

const Adder = () => {

    //Inputs states
    const [ name, setName ] = useState(false)
    const [ firstname, setFirstname ] = useState(false)
    const [ username, setUsername ] = useState(false)
    
    const addUser = async () => {
        try {
            const response = await axios.post(`https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users/`,{
                name : `${name.charAt(0).toUpperCase() + name.slice(1)} ${firstname.charAt(0).toUpperCase() + firstname.slice(1)}`,
                username : username
            });
        }
        catch (e) {
            setData(e.response.status);
        }
        Alert.alert(
            "User added",
            "Your new user have been added",
            [
              { text: "OK" },
            ]
          )
    }

    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={styles.centerise}>
                    <Text style={styles.txt}>Name</Text>
                    <TextInput style={styles.input}  onChangeText={(value) => setName(value)}/>
                </View> 
                <View style={styles.centerise}>
                    <Text style={styles.txt}>Firstname</Text>
                    <TextInput style={styles.input}  onChangeText={(value) => setFirstname(value)}/>
                </View> 
            </View>
            <View style={styles.line}>
                <View style={styles.centerise}>
                    <Text style={styles.txt}>Alias</Text>
                    <TextInput style={styles.input}  onChangeText={(value) => setUsername(value)}/>
                </View> 
            </View>
            <View style={styles.line}>
                <View style={styles.centerise}>
                    <Button title='Add' onPress={() => {addUser()}}/>
                </View>
            </View>
            
        </View>
    )
}

export default Adder;