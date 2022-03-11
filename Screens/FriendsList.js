import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../Themes/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from '../Components/searchbar';
import { FRIENDS } from '../assets/friends/friends';  
import FriendListComp from '../Components/FriendListComp'; 


export default function FriendList({}) {
  const navigation = useNavigation();

  const renderItem = (item) => (
      <FriendListComp
        name={item.name}
        id={item.id}
        profile={item.profile}
        type={item.type}
        time={item.time}
        location={item.location}
        screen={item.screen}/>
    );

  function headerComp(){ 
    return (
        <View>
        <Text style={styles.subheading2}>It's been a while since you've connected with:</Text>
        <View style={styles.whitebox}>
            <Pressable >
                <View style={styles.singleBox}>
                    <View style={styles.shadows}>
                    <Image source={require('../assets/images/profile/morgan.jpg')} style={styles.profile}></Image>
                    </View>
                    <Text style={styles.nameText}>Morgan</Text>
                    <Text style={styles.timeText}>Palo Alto, 4:48 PM</Text>
                </View>
            </Pressable>
            <Pressable >
                <View style={styles.singleBox}>
                    <View style={styles.shadows}>
                    <Image source={require('../assets/images/profile/james.jpg')} style={styles.profile}></Image>
                        </View>
                        <Text style={styles.nameText}>James</Text>
                        <Text style={styles.timeText}>Palo Alto, 4:48 PM</Text>
                    </View>
                </Pressable>
            <View style={styles.singleBox}>
            </View>
        </View>
        <Text style={styles.subheading3}>Water your goals with these friends: </Text>
        <View style={styles.whitebox}>
            <Pressable >
            <View style={styles.singleBox}>
                <View style={styles.shadows}>
                <Image source={require('../assets/images/profile/ada.png')} style={styles.profile}></Image>
                </View>
                <Text style={styles.nameText}>Ada</Text>
                <Text style={styles.timeText}>Chicago, 6:48 PM</Text>
            </View>
            </Pressable>
            <Pressable >
                <View style={styles.singleBox}>
                    <View style={styles.shadows}>
                    <Image source={require('../assets/images/profile/kristina.jpg')} style={styles.profile}></Image>
                    </View>
                    <Text style={styles.nameText}>Kristina</Text>
                    <Text style={styles.timeText}>New York, 7:48 PM</Text>
                </View>
            </Pressable>
            <Pressable >
                <View style={styles.singleBox}>
                    <View style={styles.shadows}>
                    <Image source={require('../assets/images/profile/mhar.png')} style={styles.profile}></Image>
                    </View>
                    <Text style={styles.nameText}>Mhar</Text>
                    <Text style={styles.timeText}>Manila, 5:48 PM</Text>
                </View>
            </Pressable>
        </View>
        <Text style={styles.subheading4}>All Loved Ones</Text>
        </View>
    )
  }
  return (
    <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
        <View style={styles.header}>
            <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                <View style={{width: 36, height: 36}}></View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name='people-circle-outline' size={32} color={colors.darkpink}  />
                    <Text style={styles.subheading}>Your Loved Ones</Text>
                </View>
                <Ionicons name="add-circle" size={36} color={colors.brown} />
            </View>
        </View>
        <SearchBar></SearchBar>
        <FlatList
            ListHeaderComponent={headerComp()}
            data={FRIENDS} 
            renderItem={({item}) => renderItem(item)} 
            keyExtractor={(item) => item.id} 
      />
        
    </View>
)
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
        marginLeft: 32
    },

    icon: {
        width: 48,
        height: 48,
        //marginLeft: 24,
         
    },

    icon2: {
        width: 48,
        height: 48,
        resizeMode: 'contain',
        alignSelf: 'center'
         
    },

    subheading: {
      marginLeft: 4, 
      fontSize: 20, 
      color: colors.brown, 
      fontWeight: 'bold',
      marginRight: 8
  },

  subheading2: {
      marginLeft: 36, 
      fontSize: 16, 
      color: colors.brown, 
      fontWeight: '500',
      marginRight: 8,
      marginTop: 8,
  },

  subheading3: {
      marginLeft: 36, 
      fontSize: 16, 
      color: colors.brown, 
      fontWeight: '500',
      marginRight: 8,
      marginTop: 24,
  },

  subheading4: {
      marginLeft: 36, 
      fontSize: 20, 
      color: colors.brown, 
      fontWeight: 'bold',
      marginRight: 8,
      marginTop: 28,
      marginBottom: 12,
  },
  whitebox: {
      width: '100%',
      height: 140,
      backgroundColor: 'white',
      marginTop: 12,
      shadowColor: "#292929",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row'
  },

  singleBox: {
      width: 110,
      height: '100%',
      //backgroundColor: 'black',
      marginRight: 12,
      alignItems: 'center',
      justifyContent: 'center'
  },

  profile: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
  },
  nameText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8
  },

  timeText: {
      fontSize: 12,
      fontWeight: '500',
      color: colors.darkgray
  },

  shadows: {
      shadowColor: "#292929",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
  },

  friendsBox: {
      width: '100%',
      height: 100,
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderTopColor: colors.lightgray,
      borderBottomColor: colors.lightgray,
      display: 'flex',
      flexDirection: 'row'
  }
});