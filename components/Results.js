import axios from 'axios';
import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Text, SafeAreaView, Image } from 'react-native';
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
        <SafeAreaView style={styles.container}>
            {!loadData && data.length === 0 ? <Text style={styles.buttontxt}>Start a search and/or select filters !</Text> : null}
            {isLoading ? <Text style={styles.buttontxt}>Downloading ...</Text> : null}
            {data.length !== 0 && data!== 404 && !isLoading ? 
                <DataTable style={{backgroundColor:'white'}} >
                    <DataTable.Header>
                    <DataTable.Title>Users</DataTable.Title>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title numeric>Note</DataTable.Title>
                    </DataTable.Header>
                
                {data.map(item => {
                    return(
                        <DataTable.Row>
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
        </SafeAreaView>
    );
}

export default Results;
  