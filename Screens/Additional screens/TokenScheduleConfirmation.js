import { StyleSheet, Text, View, Pressable, Image, FlatList, SafeAreaView } from 'react-native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import TokenHome from '../../Components/TokenHome';
import { useNavigation } from '@react-navigation/native';

export default function TokenScheduleConfirmation({route}) {
    const navigation = useNavigation();
    const { name, profile, time, location, emoji, monthyear, hour } = route.params

        return (
            <SafeAreaView style={styles.container}>
                <View style={{width: '85%', height: 36, alignSelf: 'center', top: 8}}>
                <Pressable onPress={() => navigation.navigate('TokenLog')}>
                    <Ionicons name="close-outline" size={32} color={colors.black}  />
                </Pressable>
            </View>
            <Text style={styles.momentText}>Scheduled to {name} at {monthyear}, {hour}!</Text>
           
                <Text style={styles.emojiText}>{emoji}</Text>
                <Image source={profile} style={styles.otherUser}></Image>
            
            <Text style={styles.textDescInfo}>{location}, {time}</Text>
            </SafeAreaView>
        )

    
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
        alignSelf: 'center'   
    },

    momentText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3A3A3A',
        textAlign: 'center',
        margin: 36,
        marginTop: 64,
        top: 32
    },

    icon: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
        
    },

    profileImages: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        marginTop: 64
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
        fontSize: 20,
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

    emojiText: {
        fontSize: 80,
        marginBottom: 24,
        textAlign: 'center',
        marginTop: 72,
        marginBottom: 72
    }
});