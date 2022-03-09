import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Additional screens/HomeScreen';
import SharedMoment from './Additional screens/SharedMoment';
import Profile from './Additional screens/Profile';
import MomentsLog from './Additional screens/MomentsLog';
import MomentChooseProcess from './Additional screens/MomentChooseProcess';
import MomentUnrequited from './Additional screens/MomentUnrequited';
import MomentConfirmationPage from './Additional screens/MomentConfirmationPage';
import TokenLog from './Additional screens/TokenLog';

const Stack = createStackNavigator();


export default function HomeStack({}) {

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
    screenOptions= {() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="Profile" component={Profile} />

    {/*Moments*/}
    <Stack.Screen name="MharSharedMoment" component={SharedMoment} />
    <Stack.Screen name="MomentsLog" component={MomentsLog} />

    <Stack.Screen name="MomentChooseProcess" component={MomentChooseProcess} />

    <Stack.Screen name="MorganMoment" component={MomentUnrequited} />
    <Stack.Screen name="BryanMoment" component={MomentUnrequited} />
    <Stack.Screen name="EmilyMoment" component={MomentUnrequited} />
    <Stack.Screen name="KristinaMoment" component={MomentUnrequited} />
    <Stack.Screen name="MharMoment" component={MomentUnrequited} />

    <Stack.Screen name="AdaMoment" component={MomentUnrequited} />
    <Stack.Screen name="JamesMoment" component={MomentUnrequited} />
    <Stack.Screen name="MTLMoment" component={MomentUnrequited} />

    <Stack.Screen name="AdaSharedMoment" component={SharedMoment} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="JamesSharedMoment" component={SharedMoment} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="MTLSharedMoment" component={SharedMoment} options={{ cardStyleInterpolator: forFade }}/>

    <Stack.Screen name="MorganConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="BryanConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="EmilyConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="KristinaConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="MharConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>

    <Stack.Screen name="AdaConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="JamesConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>
    <Stack.Screen name="MTLConfirmMoment" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>


    <Stack.Screen name="MharMomentHomeScreenConfirm" component={MomentConfirmationPage} options={{ cardStyleInterpolator: forFade }}/>

    {/*Tokens*/}
    <Stack.Screen name="TokenLog" component={TokenLog} />
    
  </Stack.Navigator>
    );
  }