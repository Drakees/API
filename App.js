import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Text, View, Image, Touchable, Alert, TextInput, TouchableWithoutFeedback } from 'react-native';
import { FlatList, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './Styles';
import RNPickerSelect from 'react-native-picker-select';


export default function App() {
  //Request states
  const [ loadData, setLoadData] = useState(false)
  const [ isLoading, setIsLoading] = useState(false)
  const [ data, setData] = useState([])
  //Filters states
  const [ sortBy , setSort] = useState(false)
  const [ orderBy, setOrder] = useState('asc')
  const [ search, setSearch] = useState('search')
  const [ input, setInput] = useState(false)
  const [ allSearch, setAllSearch] = useState(false)
  const [ nameSearch, setNameSearch] = useState(false)
  const [ usernameSearch, setUsernameSearch] = useState(false)
  //Url
  let url= 'https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users?page=1'
  
  const buildUrl = ()=>{
    if(sortBy){
      url+=`&sortBy=${sortBy}&order=${orderBy}`
    }
    if(allSearch){
      url+=`&search=${allSearch}`
    }
    else if(nameSearch){
      url+=`&name=${nameSearch}`
    }
    else if(usernameSearch){
      url+=`&username=${usernameSearch}`
    }
    console.log(url)
    return url
  }

  //Request
  useEffect(() => {
    buildUrl()
    if (loadData) {
      setIsLoading(true)
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data)
          setTimeout(()=>{
            setIsLoading(false)
          },100)
        }
        catch (e) {
          setData(e.response.status);
        }
      };
      fetchData();
      setLoadData(false)
    }
  }, [loadData]);

  //Search
  const defSearch =(input) => {
    if(search === 'search'){
      setAllSearch(input)
      setNameSearch(false)
      setUsernameSearch(false)
    }
    else if(search === 'name'){
      setNameSearch(input)
      setAllSearch(false)
      setUsernameSearch(false)
    }
    else if(search === 'username'){
      setUsernameSearch(input)
      setNameSearch(false)
      setAllSearch(false)
    }
    setLoadData(!loadData)
  }

  //DELETE
  const confirmDelete = (id) => {
    const deleteUser= async (delId)=> {
      try {
        const response = await axios.delete(`https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users/${delId}`);
      }
      catch (e) {
        setData(e.response.status);
      }
      setLoadData(true)
      console.log('user deleted', delId)
    }
    Alert.alert(
      "Delete this user ?",
      "Are you sur you want to delete this user ?",
      [
        { text: "OK", onPress: () => deleteUser(id) },
        {
          text: "Cancel",
          onPress: () => console.log("delete annulated"),
          style: "cancel"
        },
      ]
    )
  }

 
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.filters}>
          <Text style={styles.buttontxt}>Filters</Text> 
          <View>
          <Text style={styles.buttontxt}>Sort by :</Text> 
            <RNPickerSelect
              style={styles.selector}
              onValueChange={(value) => value === 'false' ? setSort(false) : setSort(value)}
              placeholder= {{ label: 'Default', value: 'false' }}
              items={[
                  { label: 'Name', value: 'name' },
                  { label: 'Alias', value: 'username' },
              ]}
            />
          </View>
          <View>
          <Text style={styles.buttontxt}>Order by :</Text> 
            <RNPickerSelect
                style={styles.input}
                onValueChange={(value) => value === 'Select an item...' ? setOrder('asc') : setOrder(value)}
                placeholder={{ label: 'Asc', value: 'asc' }}
                items={[
                    { label: 'Desc', value: 'desc' },
                ]}
              />
          </View>
        <Button title='Press me' onPress={() => setLoadData(!loadData)}/>
        </View>
        <View style={styles.search}>
          <View style={styles.centerise}>
          <Text style={styles.buttontxt}>Search :</Text>
            <RNPickerSelect
              style={styles.selector}
              onValueChange={(value) => setSearch(value)}
              placeholder= {{ label: 'All fields', value: 'search' }}
              items={[
                  { label: 'Name', value: 'name' },
                  { label: 'Alias', value: 'username' },
              ]}
            />
            <TextInput style={styles.input} onChangeText={(value) => setInput(value)}/>
          </View>
          <Button title='Search' onPress={(e) => defSearch(input)}/>
        </View>
      </View>

      <View style={styles.results}>
        {!loadData && data.length === 0 ? <Text style={styles.buttontxt}>Start a search and/or select filters !</Text> : null}
        {isLoading ? <Text style={styles.buttontxt}>Downloading ...</Text> : null}
        {data.length !== 0 && data!== 404 && !isLoading ? 
          <FlatList 
          data={data}
          renderItem={({item , index}) => (
            <View >
              <TouchableWithoutFeedback onPress={() => confirmDelete(item.id)}>
                <Image style={styles.tinyLogo} source={{uri : item.avatar}}/>
              </TouchableWithoutFeedback>
              <Text  style={styles.txt}>Name : {item.name},</Text>
              <Text  style={styles.txt}>Alias : {item.username}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}/>
        : null }
        {data === 404 ? 
          <Text style={styles.buttontxt}>No results found</Text>
        : null}
      </View>
      <StatusBar style="light" />
    </View>
  );
}
