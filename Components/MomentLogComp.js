import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { useNavigation } from '@react-navigation/native';


export default function MomentLogComp({ id, name, profile, type, theirTime, location, yourTime}) {
    const navigation = useNavigation();

    function image(type, profile) {
        // if (type == 0) {
            return (
                <Image source={profile} style={styles.sharedMomentPicture}/>       
            )
            {/*} else {
            return (
                <Image source={profile} style={styles.notSharedMomentPicture}/>       
            )
        }*/}
    }

    function text(type) {
        if (type == 0) {
            return (
                <View style={{display: 'flex', flexDirection: 'row', marginLeft: 24}}>
                    <Text style={styles.nameMoment}>{name} & You</Text>
                    <Text style={styles.notNameMoment}> shared a moment</Text>
                </View>
            );
        } else if (type == 1) {
            return (
                <View style={{display: 'flex', flexDirection: 'row', marginLeft: 24}}>
                    <Text style={styles.notNameMoment}>You were thinking of </Text>
                    <Text style={styles.nameMoment}>{name}</Text>
                </View>
            );
        } else {
            return (
                <View style={{display: 'flex', flexDirection: 'row', marginLeft: 24}}>
                    <Text style={styles.nameMoment}>{name}</Text>
                    <Text style={styles.notNameMoment}> was thinking of you</Text>
                </View>
            );
        }
    }

    return (
        <View style={styles.box}>
            <View style={styles.activeMomentBox}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
                    {image(type, profile)}
                    <View style={{width: '75%', height: '100%', justifyContent: 'center', marginLeft: -8,}}>
                        {text(type)}
                        <Text style={styles.joinActiveMomentSub}>{name}: {location} {theirTime}</Text>
                        {/*<Text style={styles.joinActiveMomentSub}>You: Palo Alto, CA, {yourTime} </Text>*/}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    activeMomentBox: {
        width: '100%',
        height: 150, 
        backgroundColor: colors.purewhite,
        alignSelf: 'center',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        marginBottom: 12,
        borderRadius: 24,
        marginTop: 8
    },

    box: {
        width: 375,
        alignSelf: 'center',
        shadowColor: "#292929",
    },

    nameMoment: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: colors.darkpink,
        //marginLeft: 24,
        //marginTop: 24
    },

    notNameMoment: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: colors.brown,
        //marginLeft: 24,
        //marginTop: 24
    },

    joinActiveMomentSub: {
        //width: '85%',
        fontSize: 14, 
        fontWeight: '400',
        color: colors.brown,
        marginLeft: 24,
        marginTop: 8,
        fontWeight: '500',
    },

    sharedMomentPicture: {
        width: 88,
        height: 88,
        borderRadius: 88/2,
        //alignSelf: 'center',
        marginTop: 32,
        marginLeft: 16,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,      
    },

    notSharedMomentPicture: {
        width: 88,
        height: 88,
        borderRadius: 88/2,
        //alignSelf: 'center',
        marginTop: 32,
        marginLeft: 16,
    },
})