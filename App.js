import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './Screens/Home';
import FriendList from './Screens/FriendsList';
import Goals from './Screens/Goals';
import Colors from './Themes/Colors';


import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreens from './Screens/Onboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = 'home'
                } else if (route.name === 'Friends') {
                  iconName = 'people-circle-outline'
                } else if (route.name === 'Garden of Goals') {
                  iconName="leaf"
                } else if (route.name === 'Profile') {
                  iconName="person"
                }
                return <Ionicons name={iconName} size={32} color={color} />;
              },
              tabBarActiveTintColor: Colors.darkpink,
              tabBarInactiveTintColor: Colors.black,
              headerShown: false,
              tabBarShowLabel: false,
            })}>
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="Friends" component={FriendList} options={{headerShown: false}}/>
            <Tab.Screen name="Garden of Goals" component={Goals} options={{headerShown: false}}/>
          </Tab.Navigator> 
        )
    }

  return (  
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Onboarding"
            component={OnboardingScreens}
            options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={BottomTabs} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});