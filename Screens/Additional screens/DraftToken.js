import React from 'react'; 

import { View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';



import colors from '../../Themes/Colors';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


// TODO CLEAN UP LAYOUT 

export default function DraftToken({}) {
    const navigation = useNavigation();


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
                <View style={styles.lastToken}>
                    
                </View>
                <View style={styles.prompt}>
                    
                </View>
                <View style={styles.input}>
                    <View style={styles.inputBox}>
                        <TextInput
                        placeholder="Type up to 5 emojis..."
                        />
                    </View> 
                </View>
                <View style={styles.send}>
                    
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

    lastToken: {
        flex: 2,
        //backgroundColor: 'blue'
    },
    prompt: {
        flex: 3,
        //backgroundColor: 'red'

    }, 
    input:{
        flex: 4,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    inputBox:{
        flex: 4,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        justifyContent: 'center'

    }, 
    send:{
        flex: 2,
        //backgroundColor: 'yellow'

    },
    bottom: {
        flex: 2,
        //backgroundColor: 'white'
    }


  });