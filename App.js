import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubjectScreen from './screens/SubjectScreen';
import MathsTopicScreen from './screens/MathsTopicScreen';
import PhysicsTopicScreen from './screens/PhysicsTopicScreen';
import ChemistryTopicScreen from './screens/ChemistryTopicScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';


export default function App() {
  return (

      <AppContainer /> 

  )
}

const appSwitchNavigator = createSwitchNavigator({

  Subjects: {
    screen: SubjectScreen
  },

  MathsTopics: {
    screen: MathsTopicScreen 
  },

  //Physics topics

  PhysicsTopics:{
    screen: PhysicsTopicScreen
  },

  //Chemistry topics

  ChemistryTopics:{
    screen: ChemistryTopicScreen
  }

},

  {

    initialRouteName: 'Subjects'

  }

)

  const AppContainer = createAppContainer(appSwitchNavigator)



 
