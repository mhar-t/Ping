import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, RecyclerViewBackedScrollViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TokenLogSent({id, name, profile, emoji, desc, desc2, scheduled}) {
    if (scheduled == 1) {
        return (
            <View style={styles.boxUnread}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
                    <View style={styles.textBox}>
                        <Text style={styles.emojiText}>{emoji}</Text>
                        <Text style={styles.descText}>{desc2}</Text>
                    </View>
                    <View style={styles.imageBox}>
                        <View style={styles.shadows}>
                            <Image source={profile} style={styles.profilePicUnopened}></Image>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={styles.from}>To </Text>
                            <Text style={styles.nameText}>{name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View></View>
        )
    }
}

const styles = StyleSheet.create({
    boxUnread: {
        backgroundColor: colors.purewhite, 
        width: '90%', 
        height: 128, 
        borderRadius: 16, 
        shadowColor: colors.black, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        shadowOffset: { width: -1, height:  5}, 
        marginRight: 12,
        marginBottom: 12,
        marginTop: 16,
        marginLeft: 16
    },
    
    profilePicUnopened: {
        width: 72,
        height: 72,
        borderRadius: 72/2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink,
        marginBottom: 8,
    },

    from: {
        fontSize: 16,
        color: colors.black
    },

    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },

    descText: {
        fontSize: 12,
        color: colors.black,
        top: 8,
        //left: 32
    },

    emojiText: {
        fontSize: 54,
    },

    shadows: {
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },

    imageBox: {
        width: 136,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: colors.darkpink,
        borderLeftWidth: 2
    },

    textBox: {
        width: 200,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });