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
import { backgroundColor, borderLeftColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function GoalsEdit({ route }) {
    const navigation = useNavigation();
    const {goal} = route.params;
    
    function plantThumbnail(){
        if (goal.morning === '1') {
        return (
            <View style={{display: 'flex', flexDirection: 'column', width: 348, height: 300, alignSelf: 'center',backgroundColor: colors.darkgreen, marginTop: 24, borderRadius: 24}}>
                <View style={{width: '100%', height: 200, backgroundColor: colors.cream, borderTopLeftRadius: 24, borderTopRightRadius: 24}}>
                    <Image source={goal.plantImageUrl} style={{resizeMode: 'contain', width: 209, height: 338, alignSelf: 'center', bottom: 20,  left: 64}}/> 
                </View>
                <Text style={styles.plantGoalNumber}>{goal.goalNumber}x per week</Text> 
                <Text style={styles.plantGoalDescription}>Goal since: January 2021</Text> 
            </View>
        )
        } else {
            return (
                <View style={{display: 'flex', flexDirection: 'column', width: 348, height: 300, alignSelf: 'center',backgroundColor: colors.darkgreen, marginTop: 24, borderRadius: 24}}>
                    <View style={{width: '100%', height: 200, backgroundColor: colors.purple, borderTopLeftRadius: 24, borderTopRightRadius: 24}}>
                        <Image source={goal.plantImageUrl} style={{resizeMode: 'contain', width: 209, height: 338, alignSelf: 'center', bottom: 20,  left: 64}}/> 
                    </View>
                    <Text style={styles.plantGoalNumber}>{goal.goalNumber}x per week</Text> 
                    <Text style={styles.plantGoalDescription}>Goal since: January 2021</Text> 
                </View>
            )
        }
    }

    function goalEdit() {
        return (
            <View style={{height: '100%', width: '100%', backgroundColor: colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                    <View style={{marginLeft: 36, marginTop: 8, marginBottom: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={36} color={colors.black} />
                        </Pressable>
                        <View style={{width: 36, height: 36, borderRadius: 8, backgroundColor: 'red', borderColor: 'red', borderWidth: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', right: 24, }}>
                            <Ionicons name="trash-outline" size={24} color={colors.white} />
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row',  marginLeft: 36 }}>
                        <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                            <Image source={goal.profile} style={styles.profileImage}/> 
                        </View>
                        <Text style={styles.plantNameMorning}>{goal.name}</Text>
                        <Ionicons name="notifications-off-circle-outline" size={36} color={colors.black} />
                    </View>
                    <View style={{marginTop: -20}}>
                        <Text style={styles.plantSubheadingMorning}>{goal.location}</Text>
                        <Text style={styles.plantSubheadingMorning}>{goal.time}</Text>
                    </View>
                    
                    {plantThumbnail()}
                    <Text style={styles.subheading}>Edit Connection Goal</Text>
                    <View style={{display: 'flex', flexDirection: 'row',width: 348, height: 80, alignSelf: 'center', justifyContent: 'space-between', marginTop: 8, shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset}}>
                        <View style={{backgroundColor: colors.purewhite, width: 132, height: 57, marginTop: 16, borderRadius: 8,  }}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 24, textAlign: 'right', marginTop: 12, marginRight: 48}}>{goal.goalNumber}</Text> 
                            <View style={{display: 'flex', flexDirection: 'column', width: 36, height: '100%', bottom: 38, left: 104}}>
                                <Ionicons name="caret-up-outline" size={24} color={colors.black} />
                                <Ionicons name="caret-down-outline" size={24} color={colors.black} />
                            </View>
                        </View>
                        <View style={{backgroundColor: colors.purewhite, width: 172, height: 57, marginTop: 16, borderRadius: 8,  }}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: 24, textAlign: 'right', marginTop: 12, marginRight: 48}}>per week</Text> 
                            <View style={{display: 'flex', flexDirection: 'column', width: 36, height: '100%', bottom: 24, left: 140}}>
                                <Ionicons name="caret-down-outline" size={24} color={colors.black} />
                            </View>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 386, height: 57, marginTop: 8, borderRadius: 8, justifyContent: 'space-between' }}>
                        <Text style={styles.subheading}>Set Reminders</Text>
                        <View style={{width: 68, height: 32, backgroundColor: colors.slidergray, borderRadius: 100, top: 20, }}>
                            <View style={{width: 26, height: 26, borderRadius: 26 / 2, backgroundColor: colors.white, top: 3, left: 4}}></View>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 348, height: 57, marginTop: 8, borderRadius: 8, alignSelf: 'center', alignItems: 'center' }}>
                        <Ionicons name="information-circle-outline" size={24} color={colors.black} />
                        <Text style={styles.info}>Setting reminders on means you will get push notifications for this goal individually.</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', width: 348, height: 55, alignSelf: 'center', marginTop: 4, justifyContent: 'space-between'}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => navigation.goBack()}>
                            <View style={styles.buttonPink}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
        )
    }

    
    return (
        <SafeAreaView style={styles.plant}>
            {goalEdit()}
        </SafeAreaView>
    )
    
}

const styles=StyleSheet.create({
    plant: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
      },

      plantNight: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: colors.purple,
      },

      plantNameMorning: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.black, 
        marginRight: 8,
      },

      plantSubheadingMorning: {
        fontSize: 18,
        color: colors.black,
        marginTop: 4,
        marginLeft: 36 + 60 + 12, 
        marginBottom: -4,
      },

      plantGoalNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
        margin: 24,
      },

      plantGoalDescription: {
        fontSize: 14,
        color: colors.white,
        marginLeft: 24, 
        marginTop: -24,
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
          top: 4,
          color: 'red',
      },

      subheading: {
          fontSize: 18, 
          fontWeight: 'bold',
          color: colors.black,
          marginTop: 24,
          marginLeft: 40,
          marginBottom: -12,
      },

      info: {
          fontSize: 13,
          marginLeft: 16,
      },

      button: {
          width: 168,
          height: '100%',
          backgroundColor: colors.slidergray,
          borderRadius: 12,
          shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
      },

      buttonPink: {
        width: 168,
        height: '100%',
        backgroundColor: colors.darkpink,
        borderRadius: 12,
        shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset
    },

      buttonText: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        top: 16
      }
})