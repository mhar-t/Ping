import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';
import SingleGoal from '../Components/SingleGoal';
import GoalsHome from './GoalsHome';
import GoalFullScreen from '../Components/GoalFullScreen';
import GoalsEdit from './GoalsEdit';

const Stack = createStackNavigator();


export default function Goals({}) {
  return (
    <Stack.Navigator
    screenOptions= {() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="GoalsHome" component={GoalsHome} />

    <Stack.Screen name="BryanGoal" component={GoalFullScreen} />
    <Stack.Screen name="EmilyGoal" component={GoalFullScreen} />
    <Stack.Screen name="PabloGoal" component={GoalFullScreen} />

    <Stack.Screen name="AdaGoal" component={GoalFullScreen} />
    <Stack.Screen name="MharGoal" component={GoalFullScreen} />
    <Stack.Screen name="KristinaGoal" component={GoalFullScreen} />
    
    <Stack.Screen name="BryanGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="EmilyGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="PabloGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="AdaGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="MharGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="KristinaGoalEdit" component={GoalsEdit} />
  </Stack.Navigator>
    );
  }