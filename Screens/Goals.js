import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';
import SingleGoal from '../Components/SingleGoal';

export default function Goals({}) {
  DATA = [
    {
      id: '1',
      name: 'Ada',
      goalNumber: '1',
      morning: '0',
      time: '8:48 PM',
      plantImageUrl: require('../assets/images/plants/1.png'),
    },
    {
      id: '2',
      name: 'Mhar',
      goalNumber: '4',
      morning: '1',
      time: '5:48 PM',
      plantImageUrl: require('../assets/images/plants/2.png')
    },
    {
      id: '3',
      name: 'Kristina',
      goalNumber: '2',
      morning: '0',
      time: '10:48 PM',
      plantImageUrl: require('../assets/images/plants/2.png')
    },
  ];  

  const DATA2 = [
    {
      id: '1',
      name: 'Emily',
      goalNumber: '1',
      morning: '1',
      time: '9:48 AM',
      plantImageUrl: require('../assets/images/plants/3.png'),
    },
    {
      id: '2',
      name: 'Bryan',
      goalNumber: '4',
      morning: '1',
      time: '5:48 PM',
      plantImageUrl: require('../assets/images/plants/4.png')
    },

    {
      id: '3',
      name: 'Pablo',
      goalNumber: '4',
      morning: '0',
      time: '7:48 PM',
      plantImageUrl: require('../assets/images/plants/4.png')
    },
  ]; 
  
  const renderItem = (item) => (
    <SingleGoal
      name={item.name}
      id={item.id}
      goalNumber={item.goalNumber}
      morning={item.morning}
      time={item.time}
      plantImageUrl={item.plantImageUrl} />
  );

  return (
      <SafeAreaView>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 24, alignItems: 'center'}}>
          <Text style={styles.header}>Garden of Goals</Text>
          <Ionicons name="add-circle" size={36} color={colors.darkgreen} />
        </View>
        <Text style={styles.subheading}>In the garden of goals, you can view, set and edit the connections you have with your friends.</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
          <Ionicons name="search-circle" size={36} color={colors.darkpink} style={{alignSelf: 'center', marginRight: 8}} />
        </View>
        <Text style={styles.subheading2}>Water these goals this week:</Text>
        <FlatList
          horizontal={true}
          data={DATA} 
          renderItem={({item}) => renderItem(item)} 
          keyExtractor={(item) => item.id} 
        />
        <Text style={styles.subheading2}>These goals are growing strong:</Text>
        <FlatList
          horizontal={true}
          data={DATA2} 
          renderItem={({item}) => renderItem(item)} 
          keyExtractor={(item) => item.id} 
        />
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      marginTop: -8, 
      fontSize: 14, 
      color: colors.brown, 
      fontWeight: '600'
    },

    subheading2: {
      marginLeft: 24, 
      marginTop: 16, 
      fontSize: 18, 
      color: colors.brown, 
      fontWeight: '600'
    },

    searchBar: {
      width: 374,
      height: 44,
      backgroundColor: colors.white,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 10,
      shadowColor: standardStyles.shadowColor,
      shadowOpacity: standardStyles.shadowOpacity,
      shadowRadius: standardStyles.shadowRadius,
      shadowOffset: standardStyles.shadowOffset,
      margin: 24,
    },

    searchText: {
      fontSize: 13,
      fontStyle: 'italic',
      color: colors.gray, 
      marginLeft: 18, 
      alignSelf: 'center',
    },

    
  });