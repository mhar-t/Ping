import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Screens/Home';
import FriendList from './Screens/FriendsList';
import Goals from './Screens/Goals';
import Profile from './Screens/Profile';
import Colors from './Themes/Colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Friends" component={FriendList} options={{headerShown: false}}/>
        <Tab.Screen name="Garden of Goals" component={Goals} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Tab.Navigator>
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
