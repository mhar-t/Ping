import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';


export default function FriendListComp({ id, name, profile, type, time, location, screen }) {
    const navigation = useNavigation();

    return (
        
            <View style={styles.friendsBox}>
            <View style={styles.shadows}>
                    <Image source={profile} style={styles.profile}></Image>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column', marginLeft: 16}}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.timeText}>{location}, {time}</Text>
                    </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },

    profile: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginLeft: 40
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },

    timeText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.darkgray
    },

    shadows: {
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },

    friendsBox: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderTopColor: colors.lightgray,
        borderBottomColor: colors.lightgray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});