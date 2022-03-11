import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import GoalsEdit from '../Screens/GoalsEdit';


export default function TokenFullScreen({ route }) {
    const navigation = useNavigation();
    // const {token} = route.params;
    // Data3
    //const emoji = emoji; emoji
    const {id, name, profile, emoji, desc, desc2, opened, loc} = route.params;
    const receivedTime = desc2; //desc2
    const senderName = name; //name
    const senderLoc = loc; //not an option??
    //const profile = require('../assets/images/profile/emily.png'); 

    var time = ''

    if (name == 'Emily') {
        time = '9:48 AM'
    } else if (name == 'Ada') {
        time = '6:48 PM'
    } else if (name == 'Bryan') {
        time = '5:48 PM'
    } else {
        time = '7:48 PM'
    }

    return (
        <View style={{height: '100%', width: '100%', backgroundColor: colors.background, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, }}>
            <View style={{height: '50%', width: '100%', backgroundColor: colors.purewhite, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, shadowColor: colors.black, shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: { width: -1, height:  5}, }}>
                <View style={{height: '10%', width:'100%', marginLeft: 36, marginTop: 8 + 32}}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={36} color={colors.black} />
                    </Pressable>
                </View>
                    
                <View style={{marginVertical: 120}}>
                    <Text style={styles.emojiText}>{emoji}</Text>
                </View>
                
            </View>

            <View >
                <Text style={{alignSelf: 'flex-end', fontSize: 15, marginRight: 36, marginTop: 16}}> Received {receivedTime}</Text>
            </View>
            
            <View style={{display: 'flex', flexDirection: 'row',  marginLeft: 36 }}>
                <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                    <Image source={profile} style={styles.profileImage}/> 
                </View>
                <View style={styles.senderInfo}>
                    <Text style={{fontSize: 24, left: 4}}>From</Text>
                    <Text style={styles.name}>{senderName}</Text>
                    <Text style={styles.subHeading}>{senderLoc}</Text>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', width: 348, height: 55, alignSelf: 'center', marginTop: 4, justifyContent: 'space-around', top: 60}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                            <Ionicons name="bookmark-outline" size={32} color={colors.black} />
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('DraftToken', {name: name, profile: profile, time: time, location: loc})}>
                            <View style={styles.buttonPink}>
                                <Image source={require('../assets/icons/tokensend.png')} style={styles.icon2}/>
                                <Text style={styles.buttonText}>Send {name} Token</Text>
                            </View>
                        </Pressable>
                </View>
            {/* <View style={styles.senderInfo}>

            </View> */}
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    tokenCard: {
        backgroundColor: colors.purewhite, 
        width: 100, 
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

    emojiText: {
        fontSize: 100,
        alignSelf: 'center'
    },
    profileImage: {
        resizeMode: 'cover', 
        width: 140, 
        height: 140, 
        alignSelf: 'center', 
        borderRadius: 160/2,
        marginLeft: 12,
        marginTop: 50,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,
      },
    senderInfo: {
        marginLeft: 32,
        marginTop: 40,
        alignSelf: 'center'

    },

    name: {
        fontSize: 48,
        fontWeight: 'bold',
        color: colors.black, 
        // marginLeft: 0,
        // marginTop: 80,
    },
    subHeading: {
        fontSize: 24,
        color: colors.black,
        // marginTop: 4,
        // marginLeft: 36 + 60 + 12, 
        // marginBottom: -4,
    },

    button: {
        width: 60,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 12,
        shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
    },

    buttonPink: {
        width: 250,
        height: '100%',
        backgroundColor: colors.lightpink,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
    },
  
      buttonText: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        left: 4
        //top: 16
      },

      icon2: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center'
         
    },

});
