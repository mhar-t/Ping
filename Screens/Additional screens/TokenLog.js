import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DATA3 } from '../../assets/tokens/token1';
import TokenLogUnopened from '../../Components/TokenLogUnopened';
import TokenLogOpened from '../../Components/TokenLogOpened';
import TokenLogScheduled from '../../Components/TokenLogScheduled';
import TokenLogSent from '../../Components/TokenLogSent';
import TokenLogSaved from '../../Components/TokenLogSaved';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { DATA6 } from '../../assets/tokens/token2sent';
import { DATA7 } from '../../assets/tokens/token3saved';
import TokenFullScreen from '../../Components/TokenFullScreen';
import { createStackNavigator } from '@react-navigation/stack';


const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(236, 144, 143)',
      background: 'rgb(255, 249, 240)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      
    },
  };

  const Stack = createStackNavigator();

function Received() {
    const renderItem = (item) => (
        <TokenLogUnopened
            name={item.name}
            id={item.id}
            profile={item.profile}
            emoji={item.emoji}
            desc={item.desc}
            desc2={item.desc2}
            opened={item.opened}
            loc={item.loc}/>
      );

      const renderItem2 = (item) => (
        <TokenLogOpened
            name={item.name}
            id={item.id}
            profile={item.profile}
            emoji={item.emoji}
            desc={item.desc}
            desc2={item.desc2}
            opened={item.opened}
            loc={item.loc}/>
      );

      function ReceivedHome() {
            return(
            <View style={styles.box}>
                <Text style={styles.thisWeek}>Unopened Tokens</Text> 
                <FlatList
                        data={DATA3} 
                        renderItem={({item}) => renderItem(item)} 
                        keyExtractor={(item) => item.id} 
                        //inverted
                        horizontal
                />
                <Text style={styles.thisWeek}>Opened Tokens</Text> 
                <FlatList
                        data={DATA3} 
                        renderItem={({item}) => renderItem2(item)} 
                        keyExtractor={(item) => item.id} 
                />
                </View>
                )
      }
    return (
        
            <Stack.Navigator
          screenOptions= {() => ({
            headerShown: false,
          })}> 
          <Stack.Screen name="ReceivedHome" component={ReceivedHome} />
          <Stack.Screen name="EmilyToken" component={TokenFullScreen} />
          <Stack.Screen name="AdaToken" component={TokenFullScreen} />
          <Stack.Screen name="BryanToken" component={TokenFullScreen} />
          <Stack.Screen name="KristinaToken" component={TokenFullScreen} /></Stack.Navigator>          
    )
}

function Sent() {
    const renderItem3 = (item) => (
        <TokenLogScheduled
            name={item.name}
            id={item.id}
            profile={item.profile}
            emoji={item.emoji}
            desc={item.desc}
            desc2={item.desc2}
            scheduled={item.scheduled}/>
      );
      const renderItem4 = (item) => (
        <TokenLogSent
            name={item.name}
            id={item.id}
            profile={item.profile}
            emoji={item.emoji}
            desc={item.desc}
            desc2={item.desc2}
            scheduled={item.scheduled}/>
      );
    return (
        <ScrollView>
        <View style={styles.box}>
            <Text style={styles.thisWeek}>Scheduled Tokens</Text> 
            <FlatList
                    data={DATA6} 
                    renderItem={({item}) => renderItem3(item)} 
                    keyExtractor={(item) => item.id} 
            />
            <Text style={styles.thisWeek}>Sent Tokens</Text> 
            <FlatList
                    data={DATA6} 
                    renderItem={({item}) => renderItem4(item)} 
                    keyExtractor={(item) => item.id} 
            />
        </View>
        </ScrollView>
    )
}

function Saved() {
    const renderItem5 = (item) => (
        <TokenLogSaved
            name={item.name}
            id={item.id}
            date={item.date}
            emoji={item.emoji}/>
      );
    return (
        <View style={styles.box}>
            <FlatList
                    data={DATA7} 
                    renderItem={({item}) => renderItem5(item)} 
                    keyExtractor={(item) => item.id} 
                    numColumns={2}
            />
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();


export default function TokenLog({}) {
    const navigation = useNavigation();

      function headerComp() {
        return (
            <Pressable onPress={() => navigation.navigate('MomentChooseProcess')}>
                <View style={styles.box}>
                    <View style={styles.pinkbutton}>
                        <Image source={require('../../assets/icons/tokensend.png')} style={styles.icon2}/>
                        <Text style={styles.buttonText}>Create Token</Text>
                    </View> 
                    
                </View>
                </Pressable>
                )
    }


    return (
        <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
            <View style={styles.header}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                    <Pressable onPress={() => navigation.popToTop()} style={{marginTop: 4}}>
                        <Ionicons name="arrow-back-outline" size={32} color={colors.black}  />
                    </Pressable>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../../assets/icons/tokens.png')} style={styles.icon}/>
                        <Text style={styles.subheading}>Your Tokens</Text>
                    </View>
                    <Ionicons name="search-circle" size={40} color={colors.darkpink} style={{alignSelf: 'center'}} />
                </View>
            </View>
            <NavigationContainer independent={true} theme={MyTheme}> 
                <Tab.Navigator>
                    <Tab.Screen name="Received" component={Received} />
                    <Tab.Screen name="Sent" component={Sent} />
                    <Tab.Screen name="Saved" component={Saved} />
                </Tab.Navigator>
               
            </NavigationContainer>
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

    

    listBackground: {
      backgroundColor: colors.purewhite,
      width: '100%',
      height: 240,
      
      justifyContent: 'center',
      shadowColor: "#292929",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        marginBottom: 16,
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
        width: 28,
        height: 28,
        //marginLeft: 24,
         
    },

    icon2: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        alignSelf: 'center'
         
    },

    titlecard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 48, 
        // backgroundColor: 'white',
        marginTop: 24, 
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    subheading: {
        marginLeft: 4, 
        fontSize: 20, 
        color: colors.brown, 
        fontWeight: 'bold',
        marginRight: 8
    },

    thisWeek: {
        marginLeft: 4, 
        fontSize: 20, 
        color: colors.brown, 
        fontWeight: 'bold',
        //marginRight: 4,
        marginTop: 24,
        marginBottom: 0, 
    },

    pinkbutton: {
        width: '100%',
        height: 54,
        backgroundColor: colors.lightpink,
        borderRadius: 12,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        top: 32
        
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        marginLeft: 8,
    },
    
    box: {
        width: 375,
        //height: '100%',
        alignSelf: 'center',
        shadowColor: "#292929",
    },

    boxUnread: {
        backgroundColor: colors.purewhite, 
        width: 156, 
        height: 194, 
        borderRadius: 16, 
        shadowColor: colors.black, 
        shadowOpacity: 0.2, 
        shadowRadius: 4, 
        shadowOffset: { width: -1, height:  5}, 
        marginRight: 12,
        marginBottom: 24,
        marginTop: 16,
        alignItems: 'center'
    },
    
    profilePicUnopened: {
        width: 72,
        height: 72,
        borderRadius: 72/2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: colors.darkpink,
        top: 24,
        marginBottom: 36
    },

    from: {
        fontSize: 16,
        color: colors.black
    },

    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },

    descText: {
        fontSize: 14,
        color: colors.black,
        top: 12
    },

    shadows: {
        shadowColor: "#292929",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 },
    },
  });