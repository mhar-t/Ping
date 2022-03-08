import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from 'react-native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import TokenHome from '../../Components/TokenHome';
import { useNavigation } from '@react-navigation/native';

export default function MomentConfirmationPage({route}) {
    const navigation = useNavigation();
    const { name, profile, time, location, type } = route.params

    function unrequited() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
                <Pressable onPress={() => navigation.navigate('MomentsLog')}>
                    <Ionicons name="close-outline" size={32} color={colors.black}  />
                </Pressable>
            </View>
            <Text style={styles.momentText}>We'll let {name} know you thought of them at 4:48 PM</Text>
            <View style={styles.profileImages}>
                <Image source={require('../../assets/icons/moment.png')} style={styles.icon}></Image>
                <Image source={profile} style={styles.otherUser}></Image>
            </View>
            <Text style={styles.textDescInfo}>{name}: {location}, {time}</Text>
            </SafeAreaView>
        )
    }

    function requited() {
        return (
            <SafeAreaView style={styles.container}>
            <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
                <Pressable onPress={() => navigation.popToTop()}>
                    <Ionicons name="close-outline" size={32} color={colors.black}  />
                </Pressable>
            </View>
            <Text style={styles.momentText}>You and {name} shared a moment</Text>
            <Image source={require('../../assets/icons/moment.png')} style={styles.icon}/>
            <View style={styles.profileImagesShared}>
                <Image source={profile} style={styles.otherUserShared}></Image>
                <Image source={require('../../assets/images/profile/user.png')} style={styles.userShared}></Image>
            </View>

            <Text style={styles.textDescInfo}>{name}: {location}, {time}</Text>
            <Text style={styles.textDescInfo}>You: Palo Alto, CA, USA, 4:48 PM</Text>
        </SafeAreaView>
        )
    }
    
    if (type == 1) {
        return(
            unrequited()
        )
    } else {
        return(
            requited()
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.cream,
      width: '100%',
      alignSelf: 'center'
    },

    otherUser: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,      
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
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300
    },

    textDesc: {
        height: 140,
        alignSelf: 'center',
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textDescInfo: {
        fontSize: 16,
        marginTop: 32,
        textAlign: 'center',
        fontWeight: '500',
        color: colors.black,
        marginBottom: -16
    },

    profileImagesShared: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        shadowColor: colors.darkpink,
        shadowOpacity: 1,
        shadowRadius: 24,
        shadowOffset: { width: 0, height: 32 },
    },

    userShared: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginLeft: -24,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,    
    },

    otherUserShared: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginLeft: 12,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,    
    },
});