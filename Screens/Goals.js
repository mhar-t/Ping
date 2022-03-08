import { createStackNavigator } from '@react-navigation/stack';
import GoalsHome from './GoalsHome';
import GoalFullScreen from '../Components/GoalFullScreen';
import GoalsEdit from './GoalsEdit';
import GoalsAdd from './GoalsAdd';
import GoalsAddProcess from '../Components/GoalAddProcess';
import GoalsAddConfirmation from '../Components/GoalAddConfirmation';

const Stack = createStackNavigator();


export default function Goals({}) {
  return (
    <Stack.Navigator
    screenOptions= {() => ({
      headerShown: false,
    })}>
    <Stack.Screen name="GoalsHome" component={GoalsHome} />
    <Stack.Screen name="GoalsAdd" component={GoalsAdd} />

    <Stack.Screen name="BryanGoal" component={GoalFullScreen} />
    <Stack.Screen name="EmilyGoal" component={GoalFullScreen} />
    <Stack.Screen name="PabloGoal" component={GoalFullScreen} />

    <Stack.Screen name="AdaGoal" component={GoalFullScreen} />
    <Stack.Screen name="MharGoal" component={GoalFullScreen} />
    <Stack.Screen name="KristinaGoal" component={GoalFullScreen} />
    <Stack.Screen name="JamesGoal" component={GoalFullScreen} />
    <Stack.Screen name="MorganGoal" component={GoalFullScreen} />
    <Stack.Screen name="MTLGoal" component={GoalFullScreen} />
    
    <Stack.Screen name="BryanGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="EmilyGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="PabloGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="AdaGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="MharGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="KristinaGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="JamesGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="MorganGoalEdit" component={GoalsEdit} />
    <Stack.Screen name="MTLGoalEdit" component={GoalsEdit} />

    <Stack.Screen name="JamesGoalAdd" component={GoalsAddProcess} />
    <Stack.Screen name="MorganGoalAdd" component={GoalsAddProcess} />
    <Stack.Screen name="MTLGoalAdd" component={GoalsAddProcess} />

    <Stack.Screen name="JamesGoalAddConfirmation" component={GoalsAddConfirmation} />
    <Stack.Screen name="MorganGoalAddConfirmation" component={GoalsAddConfirmation} />
    <Stack.Screen name="MTLGoalAddConfirmation" component={GoalsAddConfirmation} />
  </Stack.Navigator>
    );
  }