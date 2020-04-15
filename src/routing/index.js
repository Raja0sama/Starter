import { createStackNavigator } from '@react-navigation/stack';
import Home from '_scene/Home'
import React from 'react';


const Stack = createStackNavigator();

function Main() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
  }

  export default Main