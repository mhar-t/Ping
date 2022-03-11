import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GoalsEdit from '../Screens/GoalsEdit';

function screen( name, profile, location, time, number ) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.plant}>
            <View style={{height: '100%', width: '100%', backgroundColor: colors.cream, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                <View style={{marginLeft: 36, marginTop: 8, marginBottom: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => navigation.navigate('GoalsHome')}>
                        <Ionicons name="close-outline" size={36} color={colors.black} />
                    </Pressable>
                    
                </View>
                <View style={{display: 'flex', flexDirection: 'row',  marginLeft: 36 }}>
                    <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                        <Image source={profile} style={styles.profileImage}/> 
                    </View>
                    <Text style={styles.plantNameMorning}>{name}</Text>
                    <Ionicons name="notifications-off-circle-outline" size={36} color={colors.black} />
                </View>
                <View style={{marginTop: -20}}>
                    <Text style={styles.plantSubheadingMorning}>{location}</Text>
                    <Text style={styles.plantSubheadingMorning}>{time}</Text>
                </View>
                
                <View style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <View style={{width: '100%', height: 500, backgroundColor: colors.darkgreen, bottom: -400}}>
                        <Image source={require('../assets/images/plants/1.png')} style={{resizeMode: 'contain', width: 415, height: 632, alignSelf: 'center', bottom: 425 }}/> 
                    </View>
                    <Text style={styles.plantGoalNumber}>{number}x per week</Text> 
                    <Text style={styles.confirmText}>Goal added! Watch your plant grow as you make progress!</Text>                           
                </View>
            </View>
        </SafeAreaView>
    )
}

export default function GoalsAddConfirmation({ route }) {
    
    const { name, num } = route.params;
    if (name === 'Morgan') {
        return (
            screen( "Morgan", require('../assets/images/profile/morgan.jpg'), 'Palo Alto, USA', '4:48 PM', num )
        )
    } else if (name === 'James') {
        return (
            screen( "James", require('../assets/images/profile/james.jpg'), 'Palo Alto, USA', '4:48 PM', num )
        )
    } else {
        return (
            screen( "MTL", require('../assets/images/profile/mtl.jpg'), 'Palo Alto, USA', '4:48 PM', num )
        )
    }
}

const styles=StyleSheet.create({
    plant: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.cream,
      },

      plantNight: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.purple,
      },
  
      plantName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.white, 
        marginRight: 8,
      },

      plantNameMorning: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.black, 
        marginRight: 8,
      },
  
      plantSubheading: {
        fontSize: 18,
        color: colors.white,
        marginTop: 4,
        marginLeft: 36 + 60 + 12, 
        marginBottom: -4,
      },

      plantSubheadingMorning: {
        fontSize: 18,
        color: colors.black,
        marginTop: 4,
        marginLeft: 36 + 60 + 12, 
        marginBottom: -4,
      },

      plantGoalNumber: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.white,
        alignSelf: 'center', 
        top: 18,
      },

      plantGoalDescription: {
        fontSize: 18,
        color: colors.white,
        alignSelf: 'center', 
        top: 18,
      },

      profileImage: {
        resizeMode: 'cover', 
        width: 60, 
        height: 60, 
        alignSelf: 'center', 
        borderRadius: 60/2,
        marginRight: 12,
      },

      edit: {
          fontSize: 14,
          fontWeight: '500',
          top: 6,
          color: colors.black,
      },

      editNight: {
        fontSize: 14,
        fontWeight: '500',
        top: 6,
        color: colors.white,
    },

    confirmText: {
        color: colors.brown,
        fontSize: 24,
        textAlign: 'center',
        margin: 48,
        top: -500,
        fontWeight: '600'
    }
})