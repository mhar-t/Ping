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


export default function GoalFullScreen({ route }) {
    const navigation = useNavigation();
    const {goal} = route.params;
    
    if (goal.morning === '1') {
        return (
            <SafeAreaView style={styles.plant}>
                <View style={{height: '100%', width: '100%', backgroundColor: colors.cream, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                    <View style={{marginLeft: 36, marginTop: 8, marginBottom: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={36} color={colors.black} />
                        </Pressable>
                        <Pressable onPress={() => {navigation.navigate(goal.screenName + 'Edit', {goal})}}>
                            <View style={{width: 63, height: 32, borderRadius: 8, backgroundColor: colors.cream, borderColor: colors.brown, borderWidth: 2, display: 'flex', alignItems: 'center', right: 24}}>
                                <Text style={styles.edit}>EDIT</Text>
                            </View>
                        </Pressable>
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
                    <View style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <View style={{width: '100%', height: 500, backgroundColor: colors.darkgreen, bottom: -400}}>
                            <Image source={goal.plantImageUrl} style={{resizeMode: 'contain', width: 415, height: 632, alignSelf: 'center', bottom: 425 }}/> 
                        </View>
                        <Text style={styles.plantGoalNumber}>{goal.goalNumber}x per week</Text> 
                        <Text style={styles.plantGoalDescription}>Woo! You are on track with your goal!</Text> 
                         
                    </View>
                </View>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={styles.plantNight}>
                <View style={{height: '100%', width: '100%', backgroundColor: colors.purple, borderTopLeftRadius: 24, borderTopRightRadius: 24, }}>
                    <View style={{marginLeft: 36, marginTop: 8, marginBottom: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-outline" size={36} color={colors.white} />
                        </Pressable>
                        <Pressable onPress={() => {navigation.navigate(goal.screenName + 'Edit', {goal})}}>
                            <View style={{width: 63, height: 32, borderRadius: 8, backgroundColor: colors.purple, borderColor: colors.white, borderWidth: 2, display: 'flex', alignItems: 'center', right: 24}}>
                                <Text style={styles.editNight}>EDIT</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row',  marginLeft: 36 }}>
                        <View style={{shadowColor: standardStyles.shadowColor, shadowOpacity: standardStyles.shadowOpacity, shadowRadius: standardStyles.shadowRadius, shadowOffset: standardStyles.shadowOffset,}}>
                            <Image source={goal.profile} style={styles.profileImage}/> 
                        </View>
                        <Text style={styles.plantName}>{goal.name}</Text>
                        <Ionicons name="notifications-off-circle-outline" size={36} color={colors.white}  />
                    </View>
                    <View style={{marginTop: -20}}>
                        <Text style={styles.plantSubheading}>{goal.location}</Text>
                        <Text style={styles.plantSubheading}>{goal.time}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <View style={{width: '100%', height: 500, backgroundColor: colors.darkgreen, bottom: -400}}>
                            <Image source={goal.plantImageUrl} style={{resizeMode: 'contain', width: 415, height: 632, alignSelf: 'center', bottom: 425 }}/> 
                        </View>
                        <Text style={styles.plantGoalNumber}>{goal.goalNumber}x per week</Text> 
                        <Text style={styles.plantGoalDescription}>Woo! You are on track with your goal!</Text> 
                         
                    </View>
                </View>
            </SafeAreaView>
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
          top: 4,
          color: colors.black,
      },

      editNight: {
        fontSize: 14,
        fontWeight: '500',
        top: 4,
        color: colors.white,
    }
})