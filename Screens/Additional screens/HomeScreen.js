import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { DATA3 } from '../../assets/tokens/token1';
import TokenHome from '../../Components/TokenHome';
import React, { useState } from 'react';
import { DATA4 } from '../../assets/moments/moment1';
import MomentLogHome from '../../Components/MomentLogHome';


export default function HomeScreen({}) {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    const renderItem = (item) => (
        <TokenHome
          name={item.name}
          id={item.id}
          profile={item.profile}
          emoji={item.emoji}
          desc={item.desc}
          desc2={item.desc2}
          opened={item.opened}/>
      );

      const renderItem2 = (item) => (
        <MomentLogHome
          name={item.name}
          id={item.id}
          profile={item.profile}
          type={item.type}
          theirTime={item.theirTime}
          location={item.location}
          yourTime={item.yourTime}/>
      );

      function updateMoment() {
          setCount(count + 1)
        navigation.navigate('MharSharedMoment', {name: 'Mhar', profile: require('../../assets/images/profile/mhar.png'), time: '5:48 PM', location: 'Manila, Philippines', type: 0})
      }

    function activeMoment() {
        if (count == 0) {
            return (
                <Pressable onPress={() => {updateMoment()}}>
                    <View style={styles.box}>
                    <View style={styles.activeMomentBox}>
                        <Text style={styles.joinActiveMoment}>Join Active Moment</Text>
                        <Text style={styles.joinActiveMomentSub}>Mhar is currently thinking of you. Tap here to join him and share the moment. </Text>
                        <View style={{shadowColor: colors.darkpink, shadowOpacity: 1, shadowRadius: 15, shadowOffset: { width: 0, height:  0 },}}>
                        <Image source={require('../../assets/images/profile/mhar.png')} style={styles.activeMomentPicture}/>
                        </View>
                    </View></View>
                </Pressable>
            );
        } else {
            return (
                <View>
                    <FlatList
                        horizontal={true}
                        data={DATA4} 
                        renderItem={({item}) => renderItem2(item)} 
                        keyExtractor={(item) => item.id} 
                        showsHorizontalScrollIndicator={false}
                        inverted
                        ListFooterComponent={<View style={{marginLeft:24}}></View>}
                    />
                    <Pressable onPress={() => navigation.navigate('MomentChooseProcess')}>
                    <View style={styles.pinkbutton}>
                        <Image source={require('../../assets/icons/momentgrayscale.png')} style={styles.icon2}/>
                        <Text style={styles.buttonText}>Create Moment</Text>
                    </View> 
                    </Pressable>
                </View>
            );
        }
    }

    return (
        <View style={{backgroundColor: colors.background, width: '100%', height: '100%'}}>
            <View style={styles.header}>
                <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: 24, marginTop: 40, alignContent: 'center', justifyContent: 'space-between'}}>
                    <View></View>
                    <Text style={styles.headerText}>Ping</Text>
                    <Pressable onPress={() => navigation.navigate('Profile')}>
                        <Ionicons name="person-circle" size={36} color={colors.brown} />
                    </Pressable>
                </View>
            </View>
            <View>
                <View style={styles.titlecard}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../../assets/icons/moment.png')} style={styles.icon}/>
                        <Text style={styles.subheading}>Your Moments</Text>
                        <Ionicons name="information-circle-outline" size={24} color={colors.brown} />
                    </View>
                    <Pressable onPress={() => {navigation.navigate('MomentsLog')}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.seeAll}>See All</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color={colors.brown} />
                    </View>
                    </Pressable>
                </View>
                {activeMoment()}
                <View style={styles.titlecard}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 48, height: 48, justifyContent: 'center'}}>
                            <Image source={require('../../assets/icons/tokens.png')} style={styles.icon2}/>
                        </View>
                        <Text style={styles.subheading}>Your Tokens</Text>
                        <Ionicons name="information-circle-outline" size={24} color={colors.brown} />
                    </View>
                    <Pressable onPress={() => {navigation.navigate('TokenLog')}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.seeAll}>See All</Text>
                        <Ionicons name="chevron-forward-outline" size={24} color={colors.brown} />
                    </View>
                    </Pressable>
                </View>
                <FlatList
                    horizontal={true}
                    data={DATA3} 
                    renderItem={({item}) => renderItem(item)} 
                    keyExtractor={(item) => item.id} 
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={<View style={{marginLeft:32}}></View>}
                />
                <Pressable onPress={() => {navigation.navigate('DraftToken')}}>
                    <View style={styles.pinkbutton}>
                        <Image source={require('../../assets/icons/tokensend.png')} style={styles.icon2}/>
                        <Text style={styles.buttonText}>Send Token</Text>
                    </View>  
                </Pressable>    
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
        width: 48,
        height: 48,
        //marginLeft: 24,
         
    },

    icon2: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center'
         
    },

    titlecard: {
        display: 'flex',
        flexDirection: 'row',
        width: 375,
        height: 48, 
        // backgroundColor: 'white',
        marginTop: 24, 
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },

    subheading: {
        marginLeft: 4, 
        fontSize: 20, 
        color: colors.brown, 
        fontWeight: 'bold',
        marginRight: 8
    },

    seeAll: {
        marginLeft: 4, 
        fontSize: 20, 
        color: colors.brown, 
        fontWeight: '500',
        //marginRight: 4
    },

    activeMomentBox: {
        width: '100%',
        height: 270, 
        backgroundColor: colors.purewhite,
        alignSelf: 'center',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        shadowOffset: { width: -1, height: 5 },
        marginBottom: 16,
        borderRadius: 24,
        marginTop: 8
    },

    box: {
        width: 375,
        alignSelf: 'center',
        shadowColor: "#292929",
    },

    joinActiveMoment: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: colors.darkgreen,
        marginLeft: 24,
        marginTop: 24
    },

    joinActiveMomentSub: {
        width: '85%',
        fontSize: 18, 
        fontWeight: '400',
        color: colors.black,
        marginLeft: 24,
        marginTop: 8
    },

    activeMomentPicture: {
        width: 114,
        height: 114,
        borderRadius: 114/2,
        alignSelf: 'center',
        marginTop: 20,        
    },

    pinkbutton: {
        width: 245,
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
        marginBottom: 20
        
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        alignSelf: 'center',
        marginLeft: 8,
    }
  });