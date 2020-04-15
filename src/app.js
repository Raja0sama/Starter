/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider, connect} from 'react-redux';
import store from '_reducks/_store';
import {NavigationContainer} from '@react-navigation/native';
import Main from '_routing';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
