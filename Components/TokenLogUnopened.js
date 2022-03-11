import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, RecyclerViewBackedScrollViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';

export default function TokenLogUnopened({id, name, profile, emoji, desc, desc2, opened, loc}) {
    const navigation = useNavigation();
    if (opened == 0) {
        return (
            <Pressable onPress={() => navigation.navigate(name + 'Token', {id: id, name: name, profile: profile, emoji: emoji, desc: desc, desc2: desc2, opened: opened, loc: loc})}>
            <View style={styles.boxUnread}>
                    <View style={styles.shadows}>
                        <Image source={profile} style={styles.profilePicUnopened}></Image>
                    </View>
                    <Text style={styles.from}>From</Text>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text style={styles.descText}>{desc2}</Text>
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
        width: 156, 
        height: 194, 
        borderRadius: 16, 
        shadowColor: colors.black, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        shadowOffset: { width: -1, height:  5}, 
        marginRight: 12,
        marginBottom: 24,
        marginTop: 16,
        alignItems: 'center',
        marginLeft: 16
    },
    
    profilePicUnopened: {
        width: 72,
        height: 72,
        borderRadius: 72/2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink,
        top: 24,
        marginBottom: 36
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

    shadows: {
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
  });