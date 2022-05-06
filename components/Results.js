import axios from 'axios';
import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import styles from '../Styles';


const Results = () => {
    //Request states
    const [ loadData, setLoadData] = useState(true)
    const [ isLoading, setIsLoading] = useState(false)
    const [ data, setData] = useState([])
  
    //Request
    useEffect(() => {
        if (loadData) {
            const fetchData = async () => {
            try {
                const response = await axios.get('https://6271686625fed8fcb5e5bb8e.mockapi.io/api/v1/users?sortBy=class');
                setData(response.data)
                setTimeout(()=>{
                    setIsLoading(false)
                },150)
            }
            catch (e) {
                setData(e.response.status);
            }
            };
            fetchData();
            console.log('data loaded',data)
            setLoadData(false)
        }
    }, [loadData]);
     
    return (
        <ScrollView style={{ backgroundColor:'black' }}>
            {!loadData && data.length === 0 ? <View style={styles.container}><Text style={styles.title}>Loading table... </Text></View> : null}
            {data.length !== 0 && data!== 404 && !isLoading ? 
                <DataTable style={{overflow:'scroll', backgroundColor: 'white'}} >
                    <DataTable.Header>
                    <DataTable.Title>Users</DataTable.Title>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title numeric>Note</DataTable.Title>
                    </DataTable.Header>
                
                {data.map(item => {
                    return(
                        <DataTable.Row style={{height:60, padding: 0, margin :0 }}>
                        <DataTable.Cell> 
                            <Image style={styles.tinyLogo} source={{uri : item.avatar}}/>
                        </DataTable.Cell>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.rate}</DataTable.Cell>
                        </DataTable.Row>
                    )})
                }
                          
                </DataTable>
            : null }
            {data === 404 ? 
                <Text style={styles.buttontxt}>No results found</Text>
            : null}
        </ScrollView>
    );
}

export default Results;
  