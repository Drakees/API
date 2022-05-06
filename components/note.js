import axios from 'axios';
import { useState } from 'react';
import { Button, Text, View, Image, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../Styles';

const Note = () => {

    const [classGroup, setClass] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [note, setNote] = useState(false)

    // Appelle la classe a noter 
    const requireData = async () => {
        try {
            const response = await axios.get(`https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users?class=${classGroup}`);
            setData(response.data)
        }
        catch (e) {
            setData(e.response.status);
        }
    };

    // Attribue une note à l'élève (user)
    const next = async (id) => {
        try{
            const response = await axios.put(`https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users/${id}`,{ rate: note})
            setNote(false)
            setPage(page+1)
        }
        catch(e) {
            setData(e.response.status)
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose a class to note</Text> 
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
                        placeholder= {{ label: 'Class', value: 'false' }}
                        items={[
                            { label: 'A', value: 'A' },
                            { label: 'B', value: 'B' },
                            { label: 'C', value: 'C' },
                        ]}
                    />
                    <Button title='Show class' onPress={() => requireData()}/>
                </View> 
            </View>
            <View style={styles.noteResults}>
            {data.length !== 0 && data!== 404 ?
                <View >
                    <Image style={styles.noteLogo} source={{uri : data[page].avatar}}/>
                    <Text  style={styles.noteTxt}>Name : {data[page].name},</Text>
                    <Text  style={styles.noteTxt}>Alias : {data[page].username}</Text>
                    <Text  style={styles.noteTxt}>Class : {data[page].class}</Text>
                    <TextInput style={ note >20 || note<0 ? styles.wrongNoteInput : styles.noteInput} keyboardType='numeric' maxLength={2} onChangeText={(value)=>{value !== '' ? setNote(value) : setNote(false)}} />
                    <Button title='next' onPress={() => next(data[page].id)} disabled={note >20 || note<0 || note === false  ? true : false}/>
                </View>
            :null }
            {data === 404 ? 
            <Text style={styles.buttontxt}>No results found</Text>
          : null}
            </View>
        </View>
    )
}

export default Note;