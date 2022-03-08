import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../Themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import TokenHome from '../../Components/TokenHome';
import { DATA4 } from '../../assets/moments/moment1';
import MomentLogComp from '../../Components/MomentLogComp'; 



export default function MomentsLog({}) {
    const navigation = useNavigation();

    const renderItem = (item) => (
        <MomentLogComp
          name={item.name}
          id={item.id}
          profile={item.profile}
          type={item.type}
          theirTime={item.theirTime}
          location={item.location}
          yourTime={item.yourTime}/>
      );

      function headerComp() {
        return (
            <Pressable onPress={() => navigation.navigate('MomentChooseProcess')}>
        <View style={styles.box}>
                    <View style={styles.pinkbutton}>
                        <Image source={require('../../assets/icons/momentgrayscale.png')} style={styles.icon2}/>
                        <Text style={styles.buttonText}>Create Moment</Text>
                    </View> 
                    <Text style={styles.thisWeek}>This Week</Text>  
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
                        <Image source={require('../../assets/icons/moment.png')} style={styles.icon}/>
                        <Text style={styles.subheading}>Your Moments</Text>
                    </View>
                    <Ionicons name="search-circle" size={40} color={colors.darkpink} style={{alignSelf: 'center'}} />
                </View>
            </View>
            
            
            {headerComp()}
            <FlatList
                //ListFooterComponent={headerComp()}
                data={DATA4} 
                renderItem={({item}) => renderItem(item)} 
                keyExtractor={(item) => item.id} 
                inverted
          />
         
            
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
        width: 48,
        height: 48,
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
        marginTop: 64,
        marginBottom: 16, 
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
        alignSelf: 'center',
        shadowColor: "#292929",
    },
  });