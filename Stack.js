import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
// import Favorite from './components/Favorite';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Favorites" component={Favorite} /> */}
    </Stack.Navigator>
  );
}

export default MyStack;