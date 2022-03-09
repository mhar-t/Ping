import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, RecyclerViewBackedScrollViewBase } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TokenLogSaved({id, name, emoji, date}) {
        return (
            <View style={styles.boxUnread}>
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: 16, marginTop: -16, marginBottom: -8}}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Ionicons name="bookmark" size={24} color={colors.darkpink}  />
                    </View>
                    <Text style={styles.emojiText}>{emoji}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', marginRight: 40}}>
                        <View></View>
                        <Text style={styles.descText}>{date}</Text>
                    </View>
                </View>
        )
}

const styles = StyleSheet.create({
    boxUnread: {
        backgroundColor: colors.purewhite, 
        width: 172, 
        height: 150, 
        borderRadius: 16, 
        shadowColor: colors.black, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        shadowOffset: { width: -1, height:  5}, 
        marginRight: 8,
        marginBottom: 4,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8
    },

    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black
    },

    descText: {
        fontSize: 14,
        color: colors.black,
        top: 4
    },

    shadows: {
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },

    emojiText: {
        fontSize: 58,
    },
  });