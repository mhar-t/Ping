import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DATA3 } from '../../assets/tokens/token1';
import TokenHome from '../../Components/TokenHome';
import { useNavigation } from '@react-navigation/native';

export default function SharedMoment({route}) {
    const navigation = useNavigation();
    const {name, profile, time, location, type} = route.params

    function whereToNavigate() {
        if (name === 'Mhar') {
            navigation.navigate('MharMomentHomeScreenConfirm', {name: name, profile: profile, time: time, location: location, type: type})
        } else {
            navigation.navigate(name + 'ConfirmMoment', {name: name, profile: profile, time: time, location: location, type: type})
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
            <Pressable onPress={() => whereToNavigate()}>
                    <Ionicons name="close-outline" size={32} color={colors.black}  />
                </Pressable>
            </View>
            <Text style={styles.momentText}>Take a shared moment to think about your connection</Text>
            <Image source={require('../../assets/icons/moment.png')} style={styles.icon}/>
            <View style={styles.profileImages}>
                <Image source={profile} style={styles.otherUser}></Image>
                <Image source={require('../../assets/images/profile/user.png')} style={styles.user}></Image>
            </View>

            <View style={styles.textDesc}>
                <Ionicons name="information-circle-outline" size={28} color={colors.black} />
                <Text style={styles.textDescInfo}>You and {name} may be 342 miles away from each other but in this moment you are both here thinking of each other.</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.lightpink,
      width: '100%',
      alignSelf: 'center'
      
    },

    user: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginLeft: -24,
    },

    otherUser: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginLeft: 12
    },

    momentText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3A3A3A',
        textAlign: 'center',
        margin: 36
    },

    icon: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    profileImages: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        shadowColor: colors.darkpink,
        shadowOpacity: 1,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 32 },
    },

    textDesc: {
        width: '80%',
        height: 140,
        alignSelf: 'center',
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textDescInfo: {
        fontSize: 15,
        width: '85%',
        marginLeft: 8,
        textAlign: 'center',
        fontWeight: '500',
        color: colors.black
    }
  });