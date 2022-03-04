import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Additional screens/HomeScreen';
import SharedMoment from './Additional screens/SharedMoment';
import Profile from './Additional screens/Profile';

const Stack = createStackNavigator();


export default function HomeStack({}) {
  return (
    <Stack.Navigator
    screenOptions= {() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Profile" component={Profile} />

    <Stack.Screen name="MharSharedMoment" component={SharedMoment} />
    
  </Stack.Navigator>
    );
  }