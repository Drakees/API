import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import Adder from './components/Adder';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
            <Button
              title='+'
              onPress={() => {
                navigation.navigate('Add new user')
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="Add new user" component={Adder} />
    </Stack.Navigator>
  );
}

export default MyStack;