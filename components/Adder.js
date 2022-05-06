import axios from 'axios';
import {  useState } from 'react';
import { Button, Text, View, Alert, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../Styles';

const Adder = () => {

    //Inputs states
    const [ name, setName ] = useState(false)
    const [ firstname, setFirstname ] = useState(false)
    const [ username, setUsername ] = useState(false)
    const [ classGroup, setClass ] = useState(false)
    
    //ADD USER
    const addUser = async () => {
        const postJson = {}
        if (name && firstname ){
            postJson.name = `${name.charAt(0).toUpperCase() + name.slice(1)} ${firstname.charAt(0).toUpperCase() + firstname.slice(1)}`
        }
        if (username){
            postJson.username = `${username}`
        }
        if ( classGroup ){
            postJson.class = `${classGroup}`
        }
        try {
            const response = await axios.post(`https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users/`, postJson);
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
                    <Text style={styles.txt}>Class</Text>
                    <RNPickerSelect
                        style={{
                            inputAndroid: {
                            backgroundColor: 'white',
                            borderRadius: 4,
                            color: 'black',
                            padding: 2,
                            margin: 5,
                            paddingRight: 30, // to ensure the text is never behind the icon
                            },
                            inputIOS: {
                            fontSize: 14,
                            paddingVertical: 10,
                            paddingHorizontal: 12,
                            borderWidth: 1,
                            },
                            iconContainer: {
                            top: 5,
                            right: 15,
                            },
                        }}
                        onValueChange={(value) => value === 'false' ? setClass(false) : setClass(value)}
                        useNativeAndroidPickerStyle={false}
                        placeholder= {{ label: 'Class ?', value: 'false' }}
                        items={[
                            { label: 'A', value: 'A' },
                            { label: 'B', value: 'B' },
                            { label: 'C', value: 'C' },
                        ]}
                    />
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