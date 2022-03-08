import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../Themes/Colors';
import standardStyles from '../Themes/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import GoalsEdit from '../Screens/GoalsEdit';

export default function SearchBar() {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.searchText}>Search</Text>
            <Ionicons name="search-circle" size={36} color={colors.darkpink} style={{alignSelf: 'center', marginRight: 8}} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: 374,
        height: 44,
        backgroundColor: colors.purewhite,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        shadowColor: standardStyles.shadowColor,
        shadowOpacity: standardStyles.shadowOpacity,
        shadowRadius: standardStyles.shadowRadius,
        shadowOffset: standardStyles.shadowOffset,
        margin: 24,
      },
  
      searchText: {
        fontSize: 13,
        fontStyle: 'italic',
        color: colors.gray, 
        marginLeft: 18, 
        alignSelf: 'center',
      },
}) 
