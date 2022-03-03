import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import SingleGoal from '../Components/SingleGoal';
import GoalsAdd from './GoalsAdd';
import { useNavigation } from '@react-navigation/native';
import { DATA } from '../assets/goals/goals1'
import { DATA2 } from '../assets/goals/goals2';
import React, { useState } from 'react';
import SearchBar from '../Components/searchbar';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function GoalsHome({}) {
  const navigation = useNavigation();
  
  
  const [goals, setGoals] = useState(DATA)
  const addElementJames = () => {
      var newArray = [...goals , {id: '4',
      name: 'James',
      goalNumber: '1',
      morning: '0',
      time: '8:48 PM',
      plantImageUrl: require('../assets/images/plants/1.png'),
      screenName: 'JamesGoal',
      profile: require('../assets/images/profile/james.jpg'),
      location: 'Palo Alto, USA',}];
      setGoals(newArray);
}

  const addElementMorgan = () => {
    var newArray = [...goals , {id: '5',
    name: 'Morgan',
    goalNumber: '1',
    morning: '0',
    time: '8:48 PM',
    plantImageUrl: require('../assets/images/plants/1.png'),
    screenName: 'MorganGoal',
    profile: require('../assets/images/profile/morgan.jpg'),
    location: 'Palo, Alto',}];
    setGoals(newArray);
  }

  const addElementMTL = () => {
    var newArray = [...goals , {id: '6',
    name: 'MTL',
    goalNumber: '1',
    morning: '1',
    time: '3:48 PM',
    plantImageUrl: require('../assets/images/plants/1.png'),
    screenName: 'MorganGoal',
    profile: require('../assets/images/profile/mtl.jpg'),
    location: 'Berlin, Germany',}];
    setGoals(newArray);
  }

  const renderItem = (item) => (
    <SingleGoal
      name={item.name}
      id={item.id}
      goalNumber={item.goalNumber}
      morning={item.morning}
      time={item.time}
      plantImageUrl={item.plantImageUrl} 
      screenName={item.screenName}
      profile={item.profile}
      location={item.location}/>
      
  );

  return (
      <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
        <View style={styles.header}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                    <View></View>
                    <Text style={styles.headerText}>Garden of Goals</Text>
                    <Pressable onPress={() => {navigation.navigate("GoalsAdd", { addElementJames: addElementJames, addElementMorgan: addElementMorgan, addElementMTL: addElementMTL })}}>
                      <Ionicons name="add-circle" size={36} color={colors.darkgreen} />
                    </Pressable>
                </View>
            </View>
            <Text style={styles.subheading}>In the garden of goals, you can view, set and edit the connections you have with your friends.</Text>
        <SearchBar />
        
        
        <Text style={styles.subheading2}>Water these goals this week:</Text>
        <View style={styles.listBackground}>
          <FlatList
            horizontal={true}
            data={goals} 
            renderItem={({item}) => renderItem(item)} 
            keyExtractor={(item) => item.id} 
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={goals.length - 1}
            inverted
            
          />
        </View>
        <Text style={styles.subheading2}>These goals are growing strong:</Text>
        <View style={styles.listBackground}>
          <FlatList
            horizontal={true}
            data={DATA2} 
            renderItem={({item}) => renderItem(item)} 
            keyExtractor={(item) => item.id} 
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },

    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.black,
    },

    subheading: {
      marginLeft: 24, 
      marginTop: 24,
      marginBottom: 0, 
      fontSize: 14, 
      color: colors.brown, 
      fontWeight: '600'
    },

    subheading2: {
      marginLeft: 24, 
      marginTop: 8, 
      fontSize: 18, 
      marginBottom: 8,
      color: colors.brown, 
      fontWeight: '600'
    },

    listBackground: {
      backgroundColor: colors.purewhite,
      width: '100%',
      height: 240,
      
      justifyContent: 'center',
      shadowColor: "#292929",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: -1, height: 5 },
    marginBottom: 16,
    }, 
    header: {
      width: '100%',
      height: 94,
      backgroundColor: colors.purewhite,
      alignItems: 'center',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row'
    },
    
    header2: {
        width: '100%',
        height: 94,
        backgroundColor: colors.darkgreen,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
      },

    headerText: {
        fontSize: 20, 
        color: colors.brown,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        marginLeft: 32
    },
  });