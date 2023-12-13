import * as React from 'react';
import Footer from "../components/footer";
const navigationOptions = { headerShown: false };

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './tabs/home';



const Tab = createBottomTabNavigator();

function Main(props) {
 
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <Footer
          {...props}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={navigationOptions}
      />
    </Tab.Navigator>
  );
}


export default Main;
