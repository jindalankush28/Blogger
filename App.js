import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider as BlogProvider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator({
  IndexScreen: IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen
}, {
  initialRouteName: "IndexScreen",
  defaultNavigationOptions: {
    title: "Blogger"
  }

});

const App = createAppContainer(navigator);
export default ()=>{
  return <BlogProvider>
    <App/>
    </BlogProvider>
};