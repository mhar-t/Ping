import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DATA3 } from '../../assets/tokens/token1';
import TokenHome from '../../Components/TokenHome';

export default function Profile({}) {
    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
            <View style={styles.header}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={32} color={colors.brown}  />
                    </Pressable>
                    <Text style={styles.headerText}>Profile</Text>
                    <Pressable onPress={() => {}}>
                        <Ionicons name="cog" size={32} color={colors.brown} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.shadows}>
                <Image source={require('../../assets/images/profile/user.png')} style={styles.user}></Image>
                <Image source={require('../../assets/icons/edit.png')} style={styles.edit}></Image>
            </View>

            <View style={styles.textBox}>
                <Text style={styles.title}>Display Name</Text>
                <View style={styles.whiteBox}>
                    <Text style={styles.whiteBoxText}>Pete</Text>
                </View>
                <Text style={styles.title}>Email</Text>
                <View style={styles.whiteBox}>
                    <Text style={styles.whiteBoxText}>peterlim10@gmail.com</Text>
                </View>
                <Text style={styles.title}>Password</Text>
                <View style={styles.whiteBox}>
                    <Text style={styles.whiteBoxText}>••••••••••</Text>
                </View>
                <Text style={styles.title}>Location</Text>
                <View style={styles.whiteBox}>
                    <Text style={styles.whiteBoxText}>Palo Alto, CA, United States (GMT-8)</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 94,
        backgroundColor: colors.purewhite,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
      },
  
      headerText: {
          fontSize: 20, 
          color: colors.brown,
          fontWeight: 'bold',
          alignSelf: 'center',
          textAlign: 'center',
      },

      user: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        alignSelf: 'center',
        marginTop: 44,
    },

    shadows: {
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        marginBottom: 16,
    },

    edit: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
        alignSelf: 'center',
        top: -36,
        left: 48
    },

    textBox: {
        width: '80%',
        height: 350,
        alignSelf: 'center'
    },

    title: {
        fontSize: 16,
        color: colors.brown,
        fontWeight: '500'
    },

    whiteBox: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        marginTop: 8,
        marginBottom: 16,
        borderRadius: 8,
        shadowOpacity: 0.075,
        shadowRadius: 10,
        shadowOffset: { width: -0, height: 0 },
        marginBottom: 32,
        alignItems: 'baseline',
        justifyContent: 'center'
    },

    whiteBoxText: {
        fontSize: 16,
        color: colors.black,
        fontWeight: '600',
        marginLeft: 16
    }
  });