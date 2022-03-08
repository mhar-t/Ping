import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { useNavigation } from '@react-navigation/native';


export default function MomentLogHome({ id, name, profile, type, theirTime, location, yourTime}) {
    const navigation = useNavigation();

    function textMoment() {
        if (type == 0) {
            return (
                <Text style={styles.heading}>Shared with {name}</Text>
            );
        } else if (type == 1) {
            return (
                <Text style={styles.heading}>You to {name}</Text>
            );
        } else {
            return (
                <Text style={styles.heading}>{name} to You</Text>
            )
        }
    }

    return (
        <View style={styles.box}>
            <View style={standardStyles}>
            <Image source={profile} style={styles.momentPicture}></Image>
            </View>
            {textMoment()}
            <Text>{yourTime}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    box: {
        width: 140, 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginBottom: 12,
        marginRight: 8
    },

    momentPicture: {
        width: 120,
        height: 120,
        borderRadius: 120/2,
        //alignSelf: 'center',
        marginTop: 0,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: colors.darkpink,      
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 12,
    },

})