import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Adder from './components/Adder';
import Note from './components/note';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Styles';
import Results from './components/Results';

const Stack = createStackNavigator();

function MyStack() {
  
  const navigation = useNavigation(); 
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          leftButton: () => {
            back ? <MyBackButton onPress={navigation.goBack} /> : undefined
          },
          headerRight: () => (
            <View style={styles.header}>
              <Button
                style={{maxHeight:100}}
                title='Results'
                onPress={() => {
                  navigation.navigate('Results')
                }}
                />
              <Button
                style={{maxHeight:100}}
                title='Notes'
                onPress={() => {
                  navigation.navigate('Notes')
                }}
                />
              <Button
                title='+'
                onPress={() => {
                  navigation.navigate('Add new user')
                }}
                />
            </View>
          ),
        }}
      />
      <Stack.Screen name="Add new user" component={Adder} />
      <Stack.Screen name="Notes" component={Note} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
}

export default MyStack;