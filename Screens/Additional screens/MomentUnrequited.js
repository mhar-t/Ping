import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DATA3 } from '../../assets/tokens/token1';
import TokenHome from '../../Components/TokenHome';
import { useNavigation } from '@react-navigation/native';

export default function MomentUnrequited({route}) {
    const navigation = useNavigation();
    const {name, profile, time, location, type } = route.params;

    function loadingMoment() {
        if (type == 1){
            return (
                <SafeAreaView style={styles.container}>
                    <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
                        <Pressable onPress={() => navigation.navigate(name + 'ConfirmMoment', {name: name, profile: profile, time: time, location: location, type: 1})}>
                            <Ionicons name="checkmark-sharp" size={32} color={colors.black}  />
                        </Pressable>
                    </View>
                    <Text style={styles.momentText}>You're showing {name} you are thinking of them</Text>
                    <View style={styles.profileImages}>
                        <Image source={profile} style={styles.otherUser}></Image>
                    </View>
        
                    <View style={styles.textDesc}>
                        <Ionicons name="information-circle-outline" size={28} color={colors.black} />
                        <Text style={styles.textDescInfo}>Did you know {name} can join you in this moment if they click on their notification?</Text>
                    </View>
                </SafeAreaView>
            )
        } else {
            setTimeout(()=> {
                navigation.navigate(name + 'SharedMoment', { name: name, profile: profile, time: time, location: location, type: type });
               }, 5000)
            return (
                <SafeAreaView style={styles.container}>
                    <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
                        <Pressable onPress={() => navigation.navigate(name + 'ConfirmMoment', {name: name, profile: profile, time: time, location: location, type: 1})}>
                            <Ionicons name="close-outline" size={32} color={colors.black}  />
                        </Pressable>
                    </View>
                    <Text style={styles.momentText}>Take a moment to think about your {name}</Text>
                    <View style={styles.profileImages}>
                        <Image source={profile} style={styles.otherUser}></Image>
                    </View>
        
                    <View style={styles.textDesc}>
                        <Ionicons name="information-circle-outline" size={28} color={colors.black} />
                        <Text style={styles.textDescInfo}>Did you know {name} can join you in this moment if they click on their notification?</Text>
                    </View>
                    
                </SafeAreaView>
            )
        }  
    }
    
        return (
            loadingMoment()
        )
     
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cream,
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
    },

    momentText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3A3A3A',
        textAlign: 'center',
        margin: 36,
        marginTop: 64
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
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.darkpink,
        shadowOpacity: 1,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 32 },
        height: 300
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