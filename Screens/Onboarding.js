import { Image } from 'react-native';
import React from 'react';
import colors from '../Themes/Colors';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default function OnboardingScreens({navigation}) {
    return ( <
            Onboarding 
                onDone = {() => navigation.navigate("Tabs")}
                onSkip = {() => navigation.navigate("Tabs")}
                titleStyles={{fontSize: 24, fontWeight: 'bold',}}
                subTitleStyles={{fontSize: 20, marginLeft: 10, marginRight: 10}}
            pages = { 
                [{
                        backgroundColor: colors.background,
                        image: < Image source = { require('../assets/onboarding/tokens.png') }
                        />,
                        title: 'Exchange Tokens',
                        subtitle: 'Make inside jokes or share what\'s going on in your life with your loved ones',
                    },
                    {
                        backgroundColor: colors.lightpink,
                        image: < Image source = { require('../assets/onboarding/moments.png') }
                        />,
                        title: 'Create Moments',
                        subtitle: 'Take a moment to think about your loved one. We\'ll let them know you thought of them.',
                    },
                    {
                        backgroundColor: colors.background,
                        image: < Image source = { require('../assets/onboarding/goals.png') }
                        />,
                        title: 'Maintain Connection Goals',
                        subtitle: "Don't worry, we won\'t treat connecting with your loved ones a chore so you won't see metrics or charts. Instead we'll show you generally how well you've been 'watering' your goals.",
                    },
                ]
            }
            />
        );        
    
}
