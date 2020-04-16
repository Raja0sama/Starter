import { createStackNavigator } from '@react-navigation/stack';
import Home from '_scene/App'
import React, { useState, useEffect } from 'react';
import Login from '_scene/Auth/login';
import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();


function App() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
  }
function Auth() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
  }

const Main = () => {
   const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log(!user)
  if (!user) {
    return (
     <Auth/>
    );
  }

  return (
    <App/>
  );
}



  export default Main