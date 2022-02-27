import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-screens';


export default function SingleGoal({ id, name, goalNumber, morning, time, plantImageUrl }) {
    if (morning === '1') {
        return (
            <View style={styles.plant}>
                <View style={{height: 150, width: '100%', backgroundColor: colors.cream, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                    <View style={{display: 'flex', flexDirection: 'row',  margin: 16, }}>
                        <Text style={styles.plantNameMorning}>{name}</Text>
                        <Ionicons name="sunny-outline" size={24} color={colors.black}  />
                    </View>
                    <Text style={styles.plantSubheadingMorning}>{time}</Text>
                    <Image source={plantImageUrl} style={{resizeMode: 'contain', width: 134, height: 200, alignSelf: 'center', bottom: 40 }}/> 
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.plant}>
                <View style={{height: 150, width: '100%', backgroundColor: colors.purple, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                    <View style={{display: 'flex', flexDirection: 'row',  margin: 16, }}>
                        <Text style={styles.plantName}>{name}</Text>
                        <Ionicons name="moon-outline" size={24} color={colors.white}  />
                    </View>
                    <Text style={styles.plantSubheading}>{time}</Text>
                    <Image source={plantImageUrl} style={{resizeMode: 'contain', width: 134, height: 200, alignSelf: 'center', bottom: 40 }}/> 
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    plant: {
        width: 168,
        height: 218,
        backgroundColor: colors.darkgreen,
        borderRadius: 24,
        shadowColor: standardStyles.shadowColor,
        shadowOpacity: standardStyles.shadowOpacity,
        shadowRadius: standardStyles.shadowRadius,
        shadowOffset: standardStyles.shadowOffset,
        marginLeft: 24,
        marginTop: 8,
        marginBottom: 24
      },
  
      plantName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white, 
        marginRight: 8,
      },

      plantNameMorning: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black, 
        marginRight: 8,
      },
  
      plantSubheading: {
        fontSize: 14,
        color: 'white',
        marginTop: -16,
        marginLeft: 16, 
      },

      plantSubheadingMorning: {
        fontSize: 14,
        color: colors.black,
        marginTop: -16,
        marginLeft: 16, 
      }
})