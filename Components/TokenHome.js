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
import React, { useState } from 'react';

export default function TokenHome({ id, name, profile, emoji, desc, desc2, opened, loc }) {
    const navigation = useNavigation();
    
    function notopened() {
        return (
            <Pressable onPress={() => navigation.navigate(name + 'Token', {id: id, name: name, profile: profile, emoji: emoji, desc: desc, desc2: desc2, opened: opened, loc: loc})}>
                <View style={styles.container}>
                    <View style={standardStyles}>
                        <Image source={profile} style={styles.profilePicUnopened}></Image>
                    </View>
                    <Text style={styles.from}>From</Text>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.descText}>{desc2}</Text>
                </View>
            </Pressable>
        )
    }

    function yesopened() {
        return (
            <Pressable onPress={() => navigation.navigate(name + 'Token', {id, name, profile, emoji, desc, desc2, opened, loc})}>
            <View style={styles.container}>
                <View style={standardStyles}>
                    <Image source={profile} style={styles.profilePicOpened}></Image>
                </View>
                <Text style={styles.emojiText}>{emoji}</Text>
                <Text style={styles.desc2Text}>Opened {desc}</Text>
                <View style={styles.replyBox}>
                    <Ionicons name="arrow-undo" size={28} color={colors.black} />
                </View>
            </View>
            </Pressable>
        )

    }
    
    if (opened == 0) {
        return (
            notopened()
        )
    } else {
        return (
            yesopened()
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purewhite, 
        width: 116, 
        height: 181, 
        borderRadius: 16, 
        shadowColor: colors.black, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        shadowOffset: { width: -1, height:  5}, 
        marginRight: 12,
        marginBottom: 24,
        marginTop: 16,
        alignItems: 'center'
    },
    
    profilePicUnopened: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink,
        top: 24,
        marginBottom: 36
    },

    profilePicOpened: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        top: -16,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink,
    },

    from: {
        fontSize: 16,
        color: colors.black
    },

    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },

    descText: {
        fontSize: 14,
        color: colors.black,
        top: 12
    },

    desc2Text: {
        fontSize: 12,
        color: colors.black,
        top: 8,
        fontWeight: '600'
    },

    emojiText: {
        fontSize: 32,
        top: 4,
        marginBottom: 16,
    },

    replyBox: {
        width: '100%',
        height: 40,
        backgroundColor: colors.lightpink,
        bottom: -13,
        borderBottomEndRadius: 16,
        borderBottomLeftRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
