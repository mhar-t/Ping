import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor, borderLeftColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { DATA2 } from '../assets/goals/goals2';
import React, { useState } from 'react';
import GoalsHome from './GoalsHome';
import SearchBar from '../Components/searchbar';



export default function GoalsAdd({ route }) {
    const navigation = useNavigation();
    const { addElementJames, addElementMorgan, addElementMTL } = route.params; 

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={32} color={colors.black}  />
                    </Pressable>
                    <Text style={styles.headerText}>Add a new goal</Text>
                    <View></View>
                </View>
            </View>
            <Text style={styles.headerText2}>First, pick a friend</Text>
            {/*<Text style={styles.headerText3}>Or search for a friend</Text>*/}
            <SearchBar/>
            <Text style={styles.headerText3}>Here are friends you haven't made a goal with yet</Text>
            <View style={styles.box}>
                <View style={{width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => {navigation.navigate('MorganGoalAdd', {name: 'Morgan', profile: require('../assets/images/profile/morgan.jpg'), addElement: addElementMorgan})}}>
                    <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                        <Image source={require('../assets/images/profile/morgan.jpg')} style={styles.profileImage}/>
                    </View>
                    </Pressable>
                    <Pressable onPress={() => {navigation.navigate('JamesGoalAdd', {name: 'James', profile: require('../assets/images/profile/james.jpg'), addElement: addElementJames})}}>
                        <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                            <Image source={require('../assets/images/profile/james.jpg')} style={styles.profileImage}/>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {navigation.navigate('MTLGoalAdd', {name: 'MTL', profile: require('../assets/images/profile/mtl.jpg'), addElement: addElementMTL})}}>
                    <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                        <Image source={require('../assets/images/profile/mtl.jpg')} style={styles.profileImage}/>
                    </View>
                    </Pressable>
                </View>
                <View style={{width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{width: 100, }}>
                        <Text style={styles.name}>Morgan</Text>
                    </View>
                    <View style={{width: 100, }}>
                        <Text style={styles.name}>James</Text>
                    </View>
                    <View style={{width: 100, }}>
                        <Text style={styles.name}>MTL</Text>
                    </View>
                </View>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
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
        color: colors.black,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginRight: 24
    },

    headerText2: {
        fontSize: 24, 
        color: colors.black,
        margin: 24,
        fontWeight: '600', 
        marginTop: 32,
        marginBottom: -12,
    },
    headerText3: {
        fontSize: 16, 
        color: colors.black,
        marginLeft: 24,
        marginTop: 4,
        width: '60%'
    },

    box: {
        width: '100%', height: 170, backgroundColor: colors.purewhite,
        shadowColor: "#292929",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        marginTop: 24, 
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    profileImage: {
        resizeMode: 'cover', 
        width: 100, 
        height: 100, 
        alignSelf: 'center', 
        borderRadius: 100/2,
        margin: 0,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink
      },
      name: {
          textAlign: 'center',
          marginTop: 12,
          fontWeight: 'bold',
          fontSize: 16
      }
  });