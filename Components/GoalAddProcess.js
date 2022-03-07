import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
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
import { Button } from 'react-native-web';
import NumberPlease from 'react-native-number-please';



export default function GoalsAddProcess({ route }) {
    const navigation = useNavigation();
    const {name, profile, addElement} = route.params;

  function two(name) {
      addElement();
      navigation.navigate(name + 'GoalAddConfirmation', {name});
  }

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
            <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                <Image source={profile} style={styles.profileImage}/> 
            </View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.subheading}>Set Connection Goal</Text>
                    <View style={{display: 'flex', flexDirection: 'row',width: 348, height: 80, alignSelf: 'center', justifyContent: 'center', marginTop: 8, marginLeft: 24}}>
                        <View style={{backgroundColor: colors.purewhite, width: 132, height: 57, marginTop: 16, borderRadius: 8, shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset }}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 24, textAlign: 'right', marginTop: 12, marginRight: 48}}>1</Text> 
                            
                            <View style={{display: 'flex', flexDirection: 'column', width: 36, height: '100%', bottom: 38, left: 104}}>
                                <Ionicons name="caret-up-outline" size={24} color={colors.black} />
                                <Ionicons name="caret-down-outline" size={24} color={colors.black} />
                            </View>
                        </View>
                        <View style={{width: 172, height: 57, marginTop: 16, borderRadius: 8,  }}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 24, textAlign: 'right', marginTop: 12, marginRight: 48}}>per week</Text> 
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 386, height: 57, marginTop: 8, borderRadius: 8, justifyContent: 'space-between' }}>
                        <Text style={styles.subheading}>Set Reminders</Text>
                        <View style={{width: 68, height: 32, backgroundColor: colors.slidergray, borderRadius: 100, top: 20, }}>
                            <View style={{width: 26, height: 26, borderRadius: 26 / 2, backgroundColor: colors.white, top: 3, left: 4}}></View>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 348, height: 57, marginTop: 8, borderRadius: 8, alignSelf: 'center', alignItems: 'center' }}>
                        <Ionicons name="information-circle-outline" size={24} color={colors.black} />
                        <Text style={styles.info}>Setting reminders on means you will get push notifications for this goal individually.</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 348, height: 55, alignSelf: 'center', marginTop: 4, justifyContent: 'space-between', top: 130}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => {two(name)}}>
                            <View style={styles.buttonPink}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </View>
                        </Pressable>
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
        width: 200, 
        height: 200, 
        alignSelf: 'center', 
        borderRadius: 200/2,
        margin: 0,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,
        marginTop: 36, 
      },

      nameText:{
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
          marginTop: 16,
          color: colors.black
      },

      button: {
        width: 168,
        height: '100%',
        backgroundColor: colors.slidergray,
        borderRadius: 12,
        shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
    },

    buttonPink: {
      width: 168,
      height: '100%',
      backgroundColor: colors.lightpink,
      borderRadius: 12,
      shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
  },

    buttonText: {
      fontSize: 18, 
      fontWeight: 'bold',
      color: colors.black,
      alignSelf: 'center',
      top: 16
    },

    subheading: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: colors.black,
        marginTop: 24,
        marginLeft: 40,
        marginBottom: -12,
    },

    info: {
        fontSize: 13,
        marginLeft: 16,
    },
  });