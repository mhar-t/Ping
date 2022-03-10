import React from 'react'; 

import { View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
//import {Prompt} from '../../Components/Prompt'; 




import colors from '../../Themes/Colors';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function DraftToken({}) {
    const navigation = useNavigation();


    //HARD CODED MORGAN'S NAME AND TIME
    // HARD CODED LAST TOKEN
    // TODO ^^ REPLACE WITH PROPS !!!! 
    // TODO: FONT STYLE 

    //TODO --> SCHEDULE AND SEND BUTTONS!!

    return(
        <View style={styles.main}>
            <View style={styles.header}>

                <Pressable onPress={() => navigation.goBack()} style={styles.back}>
                    <Ionicons name="arrow-back-outline" size={32} color={colors.black}  />
                </Pressable>

                <View style={styles.headerText}>
                    <Image source={require('../../assets/icons/tokens.png')} style={styles.icon}/>
                    <Text style={styles.subheading}>  Send Token</Text>
                </View>
    
            </View>
            
            <View style={styles.body}>
                <View style={styles.friend}>
                    <View>
                        <Image source={require('../../assets/images/profile/morgan.jpg')} style={styles.profile}></Image>
                    </View>
                    <View style={styles.friendInfo}> 
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Morgan</Text>   
                        <Text style={{fontSize: 16, marginTop: 3}}>Palo Alto, 4:48 pm</Text>
                    </View> 
                    <View style={{paddingLeft: 40, alignItems: 'center', justifyContent: 'center'}}>
                        <Text>🍕🌺</Text>
                        <Text style={{fontSize: 16, paddingTop: 5}}>Last Token</Text>
                    </View>
                </View>
                <View style={styles.promptContainer}>
                    <View style={styles.prompt}>
                        <Pressable>
                            <Image source={require('../../assets/icons/generate.png')} style={{width: 45, height: 45}}/>
                        </Pressable>
                        <View style={styles.promptText}>
                            <Text style={{fontSize: 16}}>Not sure what to send? Here's an idea:</Text>
                            <Text style={{fontWeight: 'bold', fontSize: 15}}>What are you looking forward to?</Text>
                        </View> 
                    </View>
                </View>
                <View style={styles.input}>
                    <View style={styles.inputBox}>
                        <TextInput
                        placeholder="Type up to 5 emojis..."
                        maxLength={5}
                        style={styles.text}
                        />
                    </View> 
                </View>
                <View style={styles.sendContainer}>
                    <View style={styles.schedule}>
                        <Text style={{fontSize: 16}}>Schedule</Text>
                    </View>
                    <View style={styles.send}>
                        <Text style={{fontSize: 16}}>Send Now</Text>
                    </View>
                </View>
                <View style={styles.bottom}></View>
            </View> 
        </View>
      );
}

// TODO -- emoji keyboard

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.background, 
        width: '100%', 
        height: '100%'
    },
    header: {
        width: '100%',
        flex: 1,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        padding: 24, 
    }, 

    headerText: {
        display: 'flex', 
        flexDirection: 'row', 
        marginLeft: '22%', 
        marginTop: 25
    },

    subheading: {
        fontSize: 20, 
        color: colors.brown, 
        fontWeight: 'bold',
    },

    back:{  
        marginTop: 22,
    },

    icon: {
        width: 28,
        height: 25,         
    },

    body:{
        flex: 15
    },

    friend: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        //backgroundColor: 'blue'
    },

    friendInfo:{
        paddingRight: 40, 
        paddingLeft: 10, 
        alignItems: 'baseline'
    }, 

    profile: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
    },
    promptContainer: {
        flex: 3,
        paddingTop: 25
        //backgroundColor: 'red'

    }, 
    prompt:{
        marginLeft: '4%',
        marginRight: '4%',
        height: '50%', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white', 
        
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    }, 
    promptText:{
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingLeft: 10 
    },
    input:{
        flex: 4,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        justifyContent: 'center', 

        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    }, 
    inputBox:{
        flex: 4,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    text:{
        fontSize: 42
    },
    sendContainer:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        //backgroundColor: 'yellow'

    },

    schedule:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        height: '40%',
        width: '30%',
        backgroundColor: colors.cream,
        borderRadius: 15, 


        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
    send:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightpink,
        height: '40%',
        width: '40%',
        borderRadius: 15,
        borderColor: colors.black,
        borderWidth: 1,


        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
    bottom: {
        flex: 1,
    }


  });