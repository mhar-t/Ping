import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, RecyclerViewBackedScrollViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TokenLogOpened({id, name, profile, emoji, desc, desc2, opened, loc}) {
    const navigation = useNavigation();

    if (opened == 1) {
        return (
            <Pressable onPress={() => navigation.navigate(name + 'Token', {id: id, name: name, profile: profile, emoji: emoji, desc: desc, desc2: desc2, opened: opened, loc: loc})}>

            <View style={styles.boxUnread}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
                    <View style={styles.imageBox}>
                        <View style={styles.shadows}>
                            <Image source={profile} style={styles.profilePicUnopened}></Image>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text style={styles.from}>From </Text>
                            <Text style={styles.nameText}>{name}</Text>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        
                        <Text style={styles.emojiText}>{emoji}</Text>
                        <Text style={styles.descText}>Opened {desc}</Text>
                    </View>
                    <View style={{marginLeft: -32, marginTop: 8}}>
                    <Ionicons name="bookmark-outline" size={24} color={colors.black}  />
                    </View>
                </View>
            </View>
            </Pressable>
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
        fontSize: 14,
        color: colors.black,
        top: 8,
        left: 32
    },

    emojiText: {
        fontSize: 64,
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
        borderRightColor: colors.darkpink,
        borderRightWidth: 2
    },

    textBox: {
        width: 200,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });